# D&D Player Chat - Web Version

This is the standalone web version of the D&D Player Chat extension, optimized for serving on a web server and mobile devices. It's a Progressive Web App (PWA) that can be installed on phones and tablets!

## Files

- `index.html` - Main HTML file with PWA meta tags
- `script.js` - JavaScript with localStorage and service worker
- `style.css` - CSS optimized for web and mobile devices
- `manifest.json` - PWA manifest for Android install prompt
- `service-worker.js` - Enables offline support and caching
- `icon16.png`, `icon48.png`, `icon128.png` - App icons

## Deployment

Upload all files to your web server:
- `index.html`
- `script.js`
- `style.css`
- `manifest.json`
- `service-worker.js`
- `icon16.png`
- `icon48.png`
- `icon128.png`

You can place them in a subdirectory or at root level.

## Installing as an App

### Android (Chrome/Edge)
1. Visit the page in Chrome or Edge
2. You'll see an "Install" or "Add to Home Screen" prompt
3. Tap it to install as a standalone app
4. The app will appear in your app drawer with your D&D icon!

### iOS (Safari)
1. Visit the page in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" in the top right
5. The app will appear on your home screen!

### Desktop (Chrome/Edge)
1. Visit the page
2. Look for the install icon in the address bar
3. Click to install as a desktop app

Once installed, the app:
- Opens in its own window (no browser UI)
- Has its own icon
- Works offline (after first visit)
- Feels like a native app!

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
