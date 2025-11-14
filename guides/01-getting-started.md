# Guide 1: Getting Started

Welcome! This guide will help you open and preview your Snatchers website.

## What You'll Learn
- How to open the website in your browser
- How to view it on different devices
- How to know if everything is working

---

## Step 1: Find Your Files

1. Open the folder where you saved your Snatchers website
2. You should see these items:
   - `index.html` (this is your main webpage)
   - `css` folder (contains styling)
   - `js` folder (contains interactive features)
   - `assets` folder (for images)
   - `guides` folder (you're reading from here!)

## Step 2: Open the Website

### On Windows:
1. Find the `index.html` file
2. Right-click on it
3. Choose "Open with" → "Your web browser" (Chrome, Firefox, Edge, etc.)

### On Mac:
1. Find the `index.html` file
2. Right-click (or Control+click) on it
3. Choose "Open With" → "Your web browser" (Safari, Chrome, Firefox, etc.)

### On Linux:
1. Find the `index.html` file
2. Right-click on it
3. Choose "Open With" → "Your web browser"

**Shortcut:** You can usually just double-click `index.html` and it will open in your default browser!

## Step 3: Check That Everything Works

Your website should now be open! You should see:

✅ **Hero Section** (Top)
- Big "SNATCHERS" title in white
- Colorful gradient background (pink to purple to teal)
- Yellow "Join the Heist!" button
- "Coming Soon!" badge

✅ **Game Overview Section**
- "What's the Deal?" heading
- Three colorful cards with emojis

✅ **Features Section**
- Blue/teal background
- Six bubble-shaped feature cards

✅ **Screenshot Section**
- Three polaroid-style frames with placeholder images

✅ **Email Signup**
- Purple/pink gradient background
- Email input box and submit button

✅ **Social Icons**
- Four colorful round icons (Twitter, Discord, YouTube, TikTok)

✅ **Footer**
- Dark background with white text

### Test the Interactive Features

1. **Scroll down** - Elements should smoothly animate as they appear
2. **Hover over cards** - They should lift up slightly
3. **Click the yellow "Join the Heist!" button** - Should scroll to signup and show sparkle effects
4. **Type your email** - Input should highlight when clicked
5. **Submit the form** - Should show a success message
6. **Hover over social icons** - They should spin!
7. **Type "chaos" anywhere** - Emojis should rain down! (Easter egg!)

## Step 4: View on Different Screen Sizes

Your website should look good on all devices!

### Test Responsiveness (Desktop)

1. **Make your browser window smaller** - Drag the edge to resize
2. **Watch how the layout changes** - Cards should stack vertically on narrow screens

### Test Responsiveness (Developer Tools)

1. **Open your browser's developer tools**:
   - Windows/Linux: Press `F12` or `Ctrl+Shift+I`
   - Mac: Press `Cmd+Option+I`

2. **Click the device toolbar icon** (looks like a phone/tablet)

3. **Choose different devices from the dropdown**:
   - iPhone SE (small phone)
   - iPad (tablet)
   - Desktop

4. **See how the site looks on each device**

### Test on Your Phone (Optional)

1. Find your computer's local IP address:
   - Windows: Open Command Prompt, type `ipconfig`, look for "IPv4 Address"
   - Mac: Open Terminal, type `ipconfig getifaddress en0`
   - Or just copy the file to your phone and open it!

2. Make sure your phone and computer are on the same WiFi

3. Type your IP address in your phone's browser (you'll need a local server for this to work)

**Easier way:** Just copy the entire Snatchers-Web folder to your phone and open `index.html` with your mobile browser!

## Step 5: Refresh Your Browser

Whenever you make changes to the code, you need to refresh to see them:

- **Normal refresh**: Press `F5` or click the refresh button
- **Hard refresh** (clears cache):
  - Windows/Linux: `Ctrl+Shift+R`
  - Mac: `Cmd+Shift+R`

**Tip:** Use hard refresh if your changes don't appear!

---

## Troubleshooting

### Problem: The page looks broken or plain (no colors, no styling)

**Solution:**
1. Make sure the `css` folder is in the same folder as `index.html`
2. Check that `styles.css` is inside the `css` folder
3. Hard refresh your browser (`Ctrl+Shift+R` or `Cmd+Shift+R`)

### Problem: Buttons don't work or animations don't play

**Solution:**
1. Make sure the `js` folder is in the same folder as `index.html`
2. Check that `script.js` is inside the `js` folder
3. Open the browser console (F12) and look for errors
4. Hard refresh your browser

### Problem: Fonts look different or basic

**Solution:**
1. Make sure you're connected to the internet (the site uses Google Fonts)
2. Wait a few seconds for fonts to load
3. Refresh the page

### Problem: I double-clicked index.html but nothing happened

**Solution:**
1. Right-click the file instead
2. Choose "Open With" → Your browser
3. If you still have trouble, drag and drop `index.html` onto your browser window

---

## What's Next?

Now that you can preview your site, you're ready to customize it!

**Next guide:** [Editing Content](02-editing-content.md) - Learn how to change text, images, and links

---

## Quick Reference

### Opening the Site
- Double-click `index.html` OR right-click → Open With → Browser

### Refreshing Changes
- Normal: `F5` or refresh button
- Hard: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Testing Responsive Design
- Press `F12` → Click device toolbar icon → Choose different devices

### Browser Console (for debugging)
- Windows/Linux: `F12` or `Ctrl+Shift+I`
- Mac: `Cmd+Option+I`

---

**You did it!** You've successfully opened your Snatchers website! 🎉

Ready to start customizing? Head to the next guide!
