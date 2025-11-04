# D&D Player Chat - Web Version

This is the standalone web version of the D&D Player Chat extension, optimized for serving on a web server and mobile devices.

## Files

- `index.html` - Main HTML file
- `script.js` - JavaScript with localStorage instead of Chrome storage API
- `style.css` - CSS optimized for web and mobile devices

## Deployment

Simply upload all three files to your web server. You can:

1. **Place in a subdirectory**: `yourserver.com/dnd-chat/index.html`
2. **Use as standalone page**: `yourserver.com/player-chat.html` (rename index.html)
3. **Root level**: Serve directly from your domain root

## Usage

1. Players visit the URL on their device (desktop or mobile)
2. On first visit, they enter the webhook URL provided by the DM
3. The webhook URL is saved in their browser's localStorage
4. They can then send messages and roll dice just like the extension

## Mobile Support

The interface is fully responsive and optimized for mobile:
- Touch-friendly button sizes
- Prevents iOS zoom on input focus
- Full-width layout on mobile devices
- Works great on phones and tablets

## Storage

Unlike the Chrome extension which uses `chrome.storage.sync`, this web version uses browser `localStorage`:
- Data is saved per-browser (not synced across devices)
- Data persists until the browser cache is cleared
- Each player needs to enter the webhook URL once per browser/device

## CORS Considerations

If your webhook service has CORS restrictions, players may need to:
- Use the webhook service's web interface instead
- Or, set up a simple proxy on your server to forward requests

Most Discord/Slack webhooks should work fine without any issues.

## Security

- The webhook URL is stored locally in each player's browser
- No data is sent anywhere except to the configured webhook
- Players should keep their webhook URL private to prevent spam
