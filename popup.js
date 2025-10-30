// DOM Elements
const setupSection = document.getElementById("setupSection");
const mainSection = document.getElementById("mainSection");
const webhookUrlInput = document.getElementById("webhookUrl");
const saveWebhookBtn = document.getElementById("saveWebhook");
const changeWebhookBtn = document.getElementById("changeWebhook");
const messageInput = document.getElementById("message");
const sendMessageBtn = document.getElementById("sendMessage");
const diceRollInput = document.getElementById("diceRoll");
const sendDiceBtn = document.getElementById("sendDice");
const statusMessage = document.getElementById("statusMessage");
const diceButtons = document.querySelectorAll(".dice-button");
const modifierButtons = document.querySelectorAll(".modifier-button");
const customModifierInput = document.getElementById("customModifier");

let webhookUrl = "";
let currentRoll = null;
let selectedModifier = 0;

// Load saved webhook on startup
chrome.storage.sync.get(["webhookUrl"], (result) => {
  if (result.webhookUrl) {
    webhookUrl = result.webhookUrl;
    showMainSection();
  }
});

// Save webhook URL
saveWebhookBtn.addEventListener("click", () => {
  const url = webhookUrlInput.value.trim();
  if (!url) {
    showStatus("Please enter a webhook URL", "error");
    return;
  }
  
  chrome.storage.sync.set({ webhookUrl: url }, () => {
    webhookUrl = url;
    showMainSection();
    showStatus("Webhook saved successfully!", "success");
  });
});

// Change webhook
changeWebhookBtn.addEventListener("click", () => {
  setupSection.style.display = "block";
  mainSection.style.display = "none";
  webhookUrlInput.value = webhookUrl;
});

// Send message
sendMessageBtn.addEventListener("click", () => {
  const text = messageInput.value.trim();
  if (!text) {
    showStatus("Please enter a message", "error");
    return;
  }
  
  sendToWebhook({ text });
  messageInput.value = "";
});

// Quick dice rolls
diceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const sides = parseInt(button.dataset.sides);
    const roll = Math.floor(Math.random() * sides) + 1;
    currentRoll = { type: `d${sides}`, value: roll };
    diceRollInput.value = roll;
    
    // Visual feedback
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
      button.style.transform = "";
    }, 100);
  });
});

// Manual dice roll entry
diceRollInput.addEventListener("input", () => {
  const value = parseInt(diceRollInput.value);
  if (value) {
    currentRoll = { type: "manual", value: value };
  }
});

// Modifier buttons
modifierButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    modifierButtons.forEach(btn => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");
    
    selectedModifier = parseInt(button.dataset.modifier);
    customModifierInput.value = "";
    
    // Visual feedback
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
      button.style.transform = "";
    }, 100);
  });
});

// Custom modifier input
customModifierInput.addEventListener("input", () => {
  const value = parseInt(customModifierInput.value);
  if (!isNaN(value)) {
    selectedModifier = value;
    // Remove active class from all buttons
    modifierButtons.forEach(btn => btn.classList.remove("active"));
  }
});

// Send dice roll
sendDiceBtn.addEventListener("click", () => {
  if (!currentRoll) {
    showStatus("Please select or enter a dice roll", "error");
    return;
  }
  
  const rollValue = currentRoll.value;
  const modifier = selectedModifier;
  const total = rollValue + modifier;
  
  let text;
  if (modifier === 0) {
    text = `_Rolled ${currentRoll.type}: ${rollValue}_`;
  } else {
    const modifierSign = modifier > 0 ? "+" : "";
    text = `_Rolled ${currentRoll.type}: ${rollValue} ${modifierSign}${modifier} = ${total}_`;
  }
  
  sendToWebhook({ text });
  
  // Reset
  currentRoll = null;
  selectedModifier = 0;
  diceRollInput.value = "";
  customModifierInput.value = "";
  modifierButtons.forEach(btn => btn.classList.remove("active"));
});

// Send to webhook
async function sendToWebhook(message) {
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    });
    
    if (response.ok) {
      showStatus("Sent successfully!", "success");
    } else {
      showStatus("Failed to send. Check your webhook URL.", "error");
    }
  } catch (error) {
    console.error("Error:", error);
    showStatus("Error sending message", "error");
  }
}

// Show main section
function showMainSection() {
  setupSection.style.display = "none";
  mainSection.style.display = "block";
}

// Show status message
function showStatus(message, type) {
  statusMessage.textContent = message;
  statusMessage.className = type;
  statusMessage.style.display = "block";
  
  setTimeout(() => {
    statusMessage.style.display = "none";
  }, 3000);
}

// Enter key support for inputs
messageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessageBtn.click();
  }
});

diceRollInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendDiceBtn.click();
  }
});

webhookUrlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    saveWebhookBtn.click();
  }
});
