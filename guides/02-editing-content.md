# Guide 2: Editing Content

Learn how to change text, images, and links on your Snatchers website!

## What You'll Learn
- How to edit text and headings
- How to change images
- How to update social media links
- How to modify button text

---

## Before You Start

### You'll Need:
1. A text editor (see README.md for recommendations)
2. Your Snatchers-Web folder open
3. Basic understanding that HTML is just text with special tags

### Important Rules:
- Always save your files after making changes
- Hard refresh your browser to see changes (`Ctrl+Shift+R` or `Cmd+Shift+R`)
- If something breaks, you can undo your changes (`Ctrl+Z` or `Cmd+Z`)

---

## Part 1: Editing Text

### Opening the File

1. Open your text editor
2. Go to File → Open
3. Find and open `index.html` in your Snatchers-Web folder

### Understanding HTML Structure

HTML uses "tags" that look like this: `<tagname>content</tagname>`

- `<h1>` = Big heading
- `<h2>` = Medium heading
- `<p>` = Paragraph text
- `<a>` = Link

**Rule:** Whatever is between the opening tag (`<h1>`) and closing tag (`</h1>`) is what shows on the page!

### Changing the Main Title

**Find this code (around line 20-30):**
```html
<h1 class="game-title">
    <span class="title-word bounce-1">SNATCHERS</span>
</h1>
```

**Change "SNATCHERS" to your game name:**
```html
<h1 class="game-title">
    <span class="title-word bounce-1">YOUR GAME NAME</span>
</h1>
```

**Save and refresh!**

### Changing the Tagline

**Find this code (around line 37):**
```html
<p class="tagline">Steal the loot, dodge the cops, and cause absolute chaos!</p>
```

**Change the text between `<p>` and `</p>`:**
```html
<p class="tagline">Your fun tagline goes here!</p>
```

### Changing Button Text

**Find this code (around line 40):**
```html
<a href="#signup" class="cta-button pulse">
    <span>Join the Heist!</span>
    <span class="button-icon">🎮</span>
</a>
```

**Change the text and emoji:**
```html
<a href="#signup" class="cta-button pulse">
    <span>Get Notified!</span>
    <span class="button-icon">🚀</span>
</a>
```

### Changing Section Headings

**Find section headings like:**
```html
<h2 class="section-title slide-up">What's the Deal?</h2>
```

**Change any text between `>` and `</h2>`:**
```html
<h2 class="section-title slide-up">About The Game</h2>
```

### Changing Feature Descriptions

**Find a feature bubble (around line 90-95):**
```html
<div class="feature-bubble bubble-1">
    <div class="feature-emoji">💎</div>
    <h3>Steal Shiny Loot</h3>
    <p>Grab everything that isn't nailed down - the shinier, the better!</p>
</div>
```

**Change the emoji, heading, and description:**
```html
<div class="feature-bubble bubble-1">
    <div class="feature-emoji">🏆</div>
    <h3>Compete to Win</h3>
    <p>Race against other players to be the champion!</p>
</div>
```

---

## Part 2: Changing Emojis

Emojis are just text! You can change them like any other text.

### Where to Find Emojis

1. **Windows:** Press `Win + .` (Windows key + period)
2. **Mac:** Press `Cmd + Ctrl + Space`
3. **Online:** Visit [Emojipedia.org](https://emojipedia.org)

### Common Places to Change Emojis

1. **Title decoration** (around line 34):
```html
<div class="title-decoration">
    <span class="emoji">💰</span>
    <span class="emoji">🚨</span>
    <span class="emoji">🏃</span>
</div>
```

2. **Overview card icons** (around line 58):
```html
<div class="card-icon">🎭</div>
```

3. **Feature emojis** (throughout features section):
```html
<div class="feature-emoji">💎</div>
```

Just replace the emoji character with a new one!

---

## Part 3: Adding Images

### Step 1: Prepare Your Images

1. Save your game screenshots in the `assets` folder
2. Name them clearly: `gameplay-1.jpg`, `screenshot-2.png`, etc.
3. Recommended size: 800x600 pixels for polaroid images

### Step 2: Replace Placeholder

**Find a placeholder (around line 150):**
```html
<div class="polaroid-image">
    <div class="placeholder-image image-1">
        <span class="placeholder-text">🎮<br>Game Screenshot<br>Coming Soon!</span>
    </div>
</div>
```

**Replace with an image tag:**
```html
<div class="polaroid-image">
    <img src="assets/gameplay-1.jpg" alt="Robbers stealing loot in action">
</div>
```

**Important parts:**
- `src="assets/gameplay-1.jpg"` = Path to your image
- `alt="..."` = Description (helps with accessibility)

### Step 3: Add More Images

Repeat for all three polaroid sections!

**Quick find:** Search for `placeholder-image` in your text editor to find all placeholders.

---

## Part 4: Updating Social Media Links

**Find the social links section (around line 180):**
```html
<a href="#" class="social-icon twitter bounce-hover" aria-label="Twitter">
```

**Change the `#` to your actual link:**
```html
<a href="https://twitter.com/yourgame" class="social-icon twitter bounce-hover" aria-label="Twitter">
```

**Do this for all social icons:**
- Twitter/X: `https://twitter.com/yourusername`
- Discord: `https://discord.gg/yourinvite`
- YouTube: `https://youtube.com/@yourchannel`
- TikTok: `https://tiktok.com/@yourusername`

**Note:** Keep the `#` if you don't have that social media account yet!

---

## Part 5: Editing Footer

**Find the footer section (around line 230):**
```html
<div class="footer-logo">
    <h3>SNATCHERS</h3>
    <p class="footer-tagline">Where chaos meets fun!</p>
</div>
```

**Change the text:**
```html
<div class="footer-logo">
    <h3>YOUR STUDIO NAME</h3>
    <p class="footer-tagline">Making awesome games!</p>
</div>
```

**Change copyright text:**
```html
<p>&copy; 2025 Snatchers Game Studio. All rights reserved.</p>
```

Change "Snatchers Game Studio" to your studio name!

---

## Quick Text Editing Checklist

Use Find & Replace in your text editor to change text quickly:

1. **Press `Ctrl+F` (Windows) or `Cmd+F` (Mac)** to open Find
2. **Type the text you want to find** (e.g., "Snatchers")
3. **Click Replace** to change each instance
4. **Or click Replace All** to change all at once (be careful!)

### What You Can Easily Change:

- [ ] Main title (SNATCHERS)
- [ ] Tagline
- [ ] Button text
- [ ] Section headings
- [ ] Feature descriptions
- [ ] Card text
- [ ] Email signup heading
- [ ] Footer text
- [ ] Copyright notice
- [ ] All emojis
- [ ] Social media links
- [ ] Image placeholders (replace with real images)

---

## Pro Tips

### 1. Use Search to Find Things Fast
Press `Ctrl+F` or `Cmd+F` and search for the text you want to change!

### 2. Be Careful With Tags
Don't delete the `<` or `>` symbols! Only change text between tags.

### 3. Keep a Backup
Before making big changes, save a copy of your `index.html` file!

### 4. Test Often
Save, refresh, and check after each change to catch mistakes early.

### 5. Use Browser Inspector
Right-click any text on your page and choose "Inspect" to find its code!

---

## Troubleshooting

### Problem: Text disappeared after my change!

**Possible causes:**
- You deleted a closing tag (`</h1>`, `</p>`, etc.)
- You deleted a `>` or `<` symbol

**Solution:**
- Press `Ctrl+Z` or `Cmd+Z` to undo
- Look for the opening tag and make sure there's a closing tag

### Problem: Page looks broken after editing

**Solution:**
- Undo your last change (`Ctrl+Z`)
- Make sure every `<tag>` has a matching `</tag>`
- Check that you didn't accidentally delete important code

### Problem: Images don't show up

**Check these things:**
1. Is the image file in the `assets` folder?
2. Is the filename spelled correctly? (case-sensitive!)
3. Is the file extension correct? (`.jpg`, `.png`, `.gif`)
4. Did you save the HTML file?

**Example:**
- ❌ Wrong: `src="assets/Image.JPG"` (case matters!)
- ✅ Right: `src="assets/image.jpg"`

---

## What's Next?

Now you know how to change all the content! Next, let's make it match your brand colors.

**Next guide:** [Changing Colors](03-changing-colors.md) - Customize the color scheme

---

## Quick Reference

### Common HTML Tags
- `<h1>` - Biggest heading
- `<h2>` - Medium heading
- `<h3>` - Small heading
- `<p>` - Paragraph
- `<a href="...">` - Link
- `<img src="..." alt="...">` - Image
- `<span>` - Inline text container

### Keyboard Shortcuts
- **Find:** `Ctrl+F` / `Cmd+F`
- **Save:** `Ctrl+S` / `Cmd+S`
- **Undo:** `Ctrl+Z` / `Cmd+Z`
- **Redo:** `Ctrl+Y` / `Cmd+Shift+Z`

### Remember
- Save after every change!
- Hard refresh browser: `Ctrl+Shift+R` or `Cmd+Shift+R`
- Don't delete tags (the `<>` stuff)
- Keep a backup copy!

---

**Great job!** You're now a content editor! 🎨

Ready to customize colors? Check out the next guide!
