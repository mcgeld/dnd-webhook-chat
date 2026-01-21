---
title: D&D Webhook Dice Roller & Chat
status: active
tags: [JavaScript, Webhooks, PWA, Browser Extension, Dungeons & Dragons]
vision: "To provide a quick, cross-platform interface for D&D dice rolling and text communication via custom webhooks."
---

# D&D Webhook Dice Roller & Chat

## Description

D&D Webhook Dice Roller & Chat is a lightweight utility designed to facilitate online Dungeons & Dragons gameplay by sending formatted chat messages and complex dice roll results directly to a user-defined HTTP webhook endpoint (e.g., Discord or a custom Virtual Tabletop listener).

The project is structured to support two primary deployment methods:
1.  **Browser Extension:** A compact pop-up interface for quick access during browser-based gaming.
2.  **Progressive Web Application (PWA):** A standalone web application offering offline support via Service Workers.

Both implementations use the same core logic for managing the webhook URL, sending messages, and executing standard dice notation (e.g., `1d20+5`).

## Setup/Installation

This project can be deployed either as a standard web application or as a development-mode browser extension.

### 1. PWA Installation (Recommended for Desktop/Mobile)

The PWA is located in the `/web` directory.

1.  Host the contents of the `/web` directory on a web server (e.g., GitHub Pages, Netlify).
2.  Navigate to the hosted `index.html`.
3.  Your browser (if PWA compatible) will prompt you to "Install App" or "Add to Home Screen." The included `service-worker.js` handles caching and offline functionality.

### 2. Browser Extension Installation (Chrome/Edge/Brave)

The extension files are in the repository root.

1.  Clone this repository locally.
2.  Open your browser's extensions management page (e.g., `chrome://extensions`).
3.  Enable **Developer Mode**.
4.  Click **Load Unpacked**.
5.  Select the root directory of the cloned repository. The extension icon will now appear in your toolbar.

### Configuration

Once the application or extension is loaded:

1.  Enter your target HTTP webhook URL (e.g., a Discord webhook URL) into the configuration field.
2.  Click **Save Webhook**. The URL is saved locally (`chrome.storage.sync` for the extension, `localStorage` for the PWA) and the main interface will become available.

## Tech Stack

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript (ES6+) | Core user interface and application logic. |
| **Extension Storage** | Chrome Storage API (`chrome.storage.sync`) | Persistent storage for the Webhook URL in the extension environment. |
| **PWA Storage** | Local Storage API | Persistent storage for the Webhook URL in the web application environment. |
| **Offline Support** | Service Workers | Enables the PWA version to be run offline by caching static assets. |
| **Communication** | HTTP `POST` Requests | Sends structured JSON payloads (chat and dice rolls) to the external webhook endpoint. |