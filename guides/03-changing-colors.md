# Guide 3: Changing Colors

Make the website match your game's unique style!

## What You'll Learn
- How to change the main color scheme
- Understanding hex color codes
- Where to find color inspiration
- How to test different color combinations

---

## Understanding Colors in CSS

### Color Variables

All the main colors are stored in one place at the top of the CSS file. This makes changing colors super easy!

**Open:** `css/styles.css`

**Find this section (around lines 8-15):**
```css
:root {
    /* Main Colors - Change these to rebrand! */
    --color-primary: #FF6B9D;      /* Hot Pink */
    --color-secondary: #4ECDC4;    /* Teal */
    --color-accent: #FFE66D;       /* Yellow */
    --color-purple: #A77BCA;       /* Purple */
    --color-blue: #5DADE2;         /* Sky Blue */
    --color-orange: #FF8C42;       /* Orange */
}
```

These are your main colors! Change the hex codes to change the entire site's look.

---

## Part 1: Understanding Hex Color Codes

### What is a Hex Code?

A hex code is a 6-character code that represents a color. Examples:
- `#FF6B9D` = Hot Pink
- `#4ECDC4` = Teal
- `#000000` = Black
- `#FFFFFF` = White

### Breaking Down a Hex Code

`#FF6B9D` breaks down to:
- `FF` = Red amount (0-255)
- `6B` = Green amount (0-255)
- `9D` = Blue amount (0-255)

**Don't worry!** You don't need to calculate this. Use a color picker!

---

## Part 2: Finding Colors

### Option 1: Online Color Pickers

**Best Free Tools:**

1. **Coolors.co** - Generate color palettes
   - Visit coolors.co
   - Press spacebar to generate random palettes
   - Lock colors you like (click the lock icon)
   - Export hex codes

2. **Adobe Color** - color.adobe.com
   - Create custom color schemes
   - Explore trending palettes
   - See color harmony rules

3. **HTML Color Codes** - htmlcolorcodes.com
   - Simple color picker
   - Shows hex codes instantly

4. **Paletton** - paletton.com
   - Advanced color theory tool
   - Creates complementary colors automatically

### Option 2: Pick from an Image

1. **Upload your game screenshot to:** imagecolorpicker.com
2. Click on colors you like
3. Copy the hex codes
4. Use them in your CSS!

### Option 3: Use Color Picker Extensions

**Browser Extensions:**
- ColorPick Eyedropper (Chrome)
- ColorZilla (Firefox)
- Click any color on any website to get its hex code!

---

## Part 3: Changing Your Color Scheme

### Step 1: Choose Your Palette

Pick 4-6 colors that represent your game. For example:

**Cyberpunk Theme:**
- Primary: `#FF00FF` (Magenta)
- Secondary: `#00FFFF` (Cyan)
- Accent: `#FFFF00` (Yellow)
- Purple: `#9D00FF` (Purple)

**Nature Theme:**
- Primary: `#4CAF50` (Green)
- Secondary: `#8BC34A` (Light Green)
- Accent: `#FFC107` (Amber)
- Purple: `#9C27B0` (Purple)

**Ocean Theme:**
- Primary: `#0077BE` (Ocean Blue)
- Secondary: `#00BCD4` (Cyan)
- Accent: `#FFD54F` (Sand)
- Purple: `#3F51B5` (Indigo)

### Step 2: Update the CSS Variables

**Open:** `css/styles.css`

**Find and change these lines:**
```css
:root {
    /* Main Colors - Change these to rebrand! */
    --color-primary: #YOUR_PRIMARY_COLOR;
    --color-secondary: #YOUR_SECONDARY_COLOR;
    --color-accent: #YOUR_ACCENT_COLOR;
    --color-purple: #YOUR_PURPLE_COLOR;
    --color-blue: #YOUR_BLUE_COLOR;
    --color-orange: #YOUR_ORANGE_COLOR;
}
```

**Example (Cyberpunk theme):**
```css
:root {
    /* Main Colors - Change these to rebrand! */
    --color-primary: #FF00FF;      /* Magenta */
    --color-secondary: #00FFFF;    /* Cyan */
    --color-accent: #FFFF00;       /* Yellow */
    --color-purple: #9D00FF;       /* Purple */
    --color-blue: #0080FF;         /* Blue */
    --color-orange: #FF6600;       /* Orange */
}
```

**Save and hard refresh your browser!** (`Ctrl+Shift+R` or `Cmd+Shift+R`)

---

## Part 4: Where Each Color is Used

### Primary Color (`--color-primary`)
Used for:
- Hero section background gradient (top)
- Overview card borders
- Feature bubble borders
- Email signup section background
- Social icons
- Various highlights

### Secondary Color (`--color-secondary`)
Used for:
- Hero section gradient (bottom)
- Overview card borders
- Features section background
- Various accents

### Accent Color (`--color-accent`)
Used for:
- Main call-to-action button
- Submit button
- Text shadows on dark backgrounds
- Coming Soon badge
- Highlights

### Other Colors
These are used throughout for variety and visual interest!

---

## Part 5: Advanced Color Changes

### Changing Background Colors

**Find this section (around line 100):**
```css
.hero {
    background: linear-gradient(135deg,
        var(--color-primary) 0%,
        var(--color-purple) 50%,
        var(--color-secondary) 100%);
}
```

This creates a gradient! You can:
- **Change the colors:** Replace color variables
- **Change the angle:** Change `135deg` to `90deg`, `180deg`, etc.
- **Use solid color:** Replace entire line with: `background: var(--color-primary);`

### Changing Text Colors

**Find sections with text colors:**
```css
.section-title {
    color: var(--color-text-dark);
}
```

Change to any color variable:
```css
.section-title {
    color: var(--color-primary);
}
```

### Changing Border Colors

**Find card borders (around line 180):**
```css
.overview-card:nth-child(1) {
    border-color: var(--color-primary);
}
```

Change to your preferred color!

---

## Part 6: Testing Your Colors

### Check Contrast (Very Important!)

Your text needs to be readable! Test contrast:

1. Visit **WebAIM Contrast Checker:** webaim.org/resources/contrastchecker/
2. Enter your background color
3. Enter your text color
4. Make sure it passes WCAG AA or AAA standards

**Example:**
- Background: `#FF00FF` (magenta)
- Text: `#000000` (black)
- Check: Does it pass? ✅ or ❌

### Preview on Different Screens

1. **Test in sunlight** - Can you read it outside?
2. **Test on mobile** - Does it look good on small screens?
3. **Test with friends** - Get feedback!

---

## Part 7: Popular Color Schemes

### Vibrant & Fun (Current)
```css
--color-primary: #FF6B9D;      /* Hot Pink */
--color-secondary: #4ECDC4;    /* Teal */
--color-accent: #FFE66D;       /* Yellow */
```

### Cool & Professional
```css
--color-primary: #2C3E50;      /* Navy */
--color-secondary: #3498DB;    /* Blue */
--color-accent: #1ABC9C;       /* Turquoise */
```

### Warm & Energetic
```css
--color-primary: #E74C3C;      /* Red */
--color-secondary: #F39C12;    /* Orange */
--color-accent: #F1C40F;       /* Yellow */
```

### Pastel & Soft
```css
--color-primary: #FFB6C1;      /* Light Pink */
--color-secondary: #B0E0E6;    /* Powder Blue */
--color-accent: #FFFACD;       /* Lemon Chiffon */
```

### Dark & Mysterious
```css
--color-primary: #8E44AD;      /* Purple */
--color-secondary: #2C3E50;    /* Dark Navy */
--color-accent: #E74C3C;       /* Red */
```

### Neon & Cyberpunk
```css
--color-primary: #FF00FF;      /* Magenta */
--color-secondary: #00FFFF;    /* Cyan */
--color-accent: #00FF00;       /* Lime */
```

---

## Quick Color Changing Checklist

- [ ] Open `css/styles.css`
- [ ] Find the `:root` section at the top
- [ ] Choose new hex codes for your colors
- [ ] Update the color variables
- [ ] Save the file
- [ ] Hard refresh your browser (`Ctrl+Shift+R`)
- [ ] Check that text is readable
- [ ] Test on mobile
- [ ] Get feedback from friends

---

## Pro Tips

### 1. Start with 3 Colors
Pick just 3 main colors first:
- One primary color (main brand)
- One secondary color (contrast)
- One accent color (buttons, highlights)

### 2. Use a 60-30-10 Rule
- 60% = Main color (backgrounds)
- 30% = Secondary color (sections)
- 10% = Accent color (buttons, calls-to-action)

### 3. Test Accessibility
Make sure people with color blindness can use your site!
- Visit colororacle.org to simulate color blindness
- Use high contrast between text and background

### 4. Keep It Simple
Don't use more than 5-6 main colors. Too many colors = overwhelming!

### 5. Match Your Game
Pick colors that match your game's aesthetic and mood.

---

## Troubleshooting

### Problem: Colors didn't change!

**Solutions:**
1. Did you save the CSS file? (`Ctrl+S` or `Cmd+S`)
2. Did you hard refresh? (`Ctrl+Shift+R` or `Cmd+Shift+R`)
3. Clear your browser cache completely
4. Check for typos in hex codes (must start with `#`)

### Problem: Text is hard to read!

**Solution:**
- Dark text needs light background
- Light text needs dark background
- Use the contrast checker: webaim.org/resources/contrastchecker/

### Problem: Colors look different on my phone!

**This is normal!** Different screens show colors slightly differently. Test on multiple devices.

### Problem: I want to use brand colors but don't have hex codes!

**Solution:**
1. Open your brand logo in an image editor
2. Use the eyedropper tool to select the color
3. Copy the hex code
4. Or upload to imagecolorpicker.com and click the color

---

## What's Next?

You've customized your colors! Now let's learn how to add new sections to your site.

**Next guide:** [Adding Sections](04-adding-sections.md) - Add new cards and features

---

## Quick Reference

### CSS File Location
`css/styles.css`

### Main Color Variables Location
Lines 8-15 in `styles.css` (inside `:root {}`)

### Color Picker Tools
- coolors.co (palettes)
- htmlcolorcodes.com (picker)
- color.adobe.com (advanced)
- imagecolorpicker.com (from images)

### Contrast Checker
webaim.org/resources/contrastchecker/

### Hex Code Format
- Must start with `#`
- Followed by 6 characters (0-9, A-F)
- Example: `#FF6B9D`

---

**Awesome work!** Your site now has a custom color scheme! 🎨

Ready to add new sections? Check out the next guide!
