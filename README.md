# D&D Player Chat Extension

A Chrome extension that allows D&D players to send messages and dice rolls to their game chat via webhook.

## Features

- **Webhook Configuration**: Set up your webhook URL once, and it's saved for future use
- **Send Messages**: Type and send messages directly to the chat (Enter to send, Shift+Enter for newline)
- **Dice Rolls with Modifiers**: Roll dice and add modifiers for ability checks, attacks, and more
- **Quick Dice Rolls**: Click quick roll buttons (d4, d6, d8, d10, d12, d20) to automatically roll
- **Quick Modifiers**: Select common modifiers (-2 to +4) or enter custom values
- **Automatic Calculations**: See the roll, modifier, and total in one message

## Installation

### From Chrome Web Store
1. Visit the Chrome Web Store
2. Search for "D&D Player Chat"
3. Click "Add to Chrome"

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the extension folder
6. The extension icon will appear in your toolbar

## Setup

1. Click the extension icon
2. Enter your webhook URL (e.g., Google Chat, Discord, Slack)
3. Click "Save Webhook"
4. You're ready to go!

## Usage

### Send a Message
1. Type your message in the "Message" field
2. Press Enter to send (Shift+Enter for newline)

### Send a Dice Roll
1. **Choose your roll**:
   - Click a quick roll button (d20, d12, d10, d8, d6, d4), OR
   - Manually enter a roll value
2. **Select a modifier** (optional):
   - Click a modifier button (-2 to +4), OR
   - Enter a custom modifier value
3. Click "Send Roll"
4. Sends as: "_Rolled d20: 15 +3 = 18_"

## Supported Webhooks

This extension works with any webhook that accepts JSON POST requests with a `text` field:
- Google Chat
- Discord
- Slack
- Custom webhooks

## Privacy

This extension:
- Stores your webhook URL locally in your browser only
- Does not collect or transmit any personal data to external servers
- Sends messages directly from your browser to your configured webhook
- See [PRIVACY_POLICY.md](PRIVACY_POLICY.md) for full details

## License

MIT License - feel free to use and modify!

## Notes

- Your webhook URL is stored securely in Chrome''s sync storage
- The extension uses the same dark theme as your DM tool
- Dice roll messages are automatically italicized
