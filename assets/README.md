# Assets Folder

This folder contains images and other media for your Snatchers website.

## How to Add Images

### Option 1: Replace Placeholder Images
1. Take screenshots of your game
2. Name them clearly (e.g., `gameplay-1.jpg`, `gameplay-2.jpg`, `gameplay-3.jpg`)
3. Copy them into this `assets` folder
4. Open `index.html` and find the image placeholders
5. Replace the placeholder divs with image tags

### Option 2: Image Examples
Replace this code in `index.html`:

```html
<div class="placeholder-image image-1">
    <span class="placeholder-text">🎮<br>Game Screenshot<br>Coming Soon!</span>
</div>
```

With this:

```html
<img src="assets/gameplay-1.jpg" alt="Robbers stealing loot">
```

## Recommended Image Sizes
- **Polaroid images**: 800x600 pixels (4:3 ratio)
- **Screenshots**: 1920x1080 pixels for best quality
- **Logo**: 500x500 pixels (square)

## File Formats
- Use **JPG** for photos and screenshots
- Use **PNG** for logos with transparency
- Use **WebP** for better compression (modern browsers)

## Optimization Tips
- Compress images before uploading (use TinyPNG.com)
- Keep file sizes under 500KB for fast loading
- Use descriptive file names (no spaces!)

## Sound Files (Optional)
If you want to add sound effects:
1. Add `.mp3` or `.wav` files to this folder
2. Uncomment the sound code in `js/script.js`
3. Update the file path to match your sound file name

Example: `assets/pop.mp3`, `assets/whoosh.mp3`
