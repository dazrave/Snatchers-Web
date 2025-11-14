# Guide 4: Adding New Sections

Learn how to add new cards, features, and sections to your website!

## What You'll Learn
- How to copy and paste HTML sections
- How to add new feature cards
- How to add new overview cards
- How to create custom sections
- How to add new polaroid images

---

## Before You Start

### Important Tips
1. **Always work on a copy** - Save a backup of `index.html` first!
2. **Copy complete sections** - Make sure you get the opening AND closing tags
3. **Test after each addition** - Save and refresh to check your work
4. **Use proper indentation** - Keep your code organized and readable

### Understanding HTML Structure

HTML works like nesting boxes:
```html
<section>           <!-- Outer box -->
    <div>           <!-- Middle box -->
        <p>Text</p> <!-- Inner box with content -->
    </div>          <!-- Close middle box -->
</section>          <!-- Close outer box -->
```

**Rule:** Every opening tag needs a closing tag!

---

## Part 1: Adding a New Feature Bubble

### Step 1: Find the Features Section

**Open:** `index.html`

**Search for:** "features-grid" (around line 85)

You'll see feature bubbles that look like this:
```html
<div class="feature-bubble bubble-1">
    <div class="feature-emoji">💎</div>
    <h3>Steal Shiny Loot</h3>
    <p>Grab everything that isn't nailed down - the shinier, the better!</p>
</div>
```

### Step 2: Copy an Existing Bubble

1. **Select the entire bubble** (from `<div class="feature-bubble"...` to `</div>`)
2. **Copy it** (`Ctrl+C` or `Cmd+C`)
3. **Paste it after the last bubble** (`Ctrl+V` or `Cmd+V`)

### Step 3: Modify the New Bubble

Change these parts:
1. **Update the class name:** `bubble-1` → `bubble-7` (use the next number)
2. **Change the emoji:** Pick a new emoji
3. **Change the heading:** Write your new feature
4. **Change the description:** Describe the feature

**Example:**
```html
<div class="feature-bubble bubble-7">
    <div class="feature-emoji">🎁</div>
    <h3>Daily Rewards</h3>
    <p>Come back every day for special bonuses and surprises!</p>
</div>
```

### Step 4: Add Border Color (Optional)

**Open:** `css/styles.css`

**Find:** `.feature-bubble:nth-child(6)` (around line 290)

**Add after it:**
```css
.feature-bubble:nth-child(7) { border-color: var(--color-primary); }
```

**Save both files and refresh!**

---

## Part 2: Adding a New Overview Card

### Step 1: Find the Overview Section

**Search for:** "overview-grid" (around line 58)

You'll see cards like this:
```html
<div class="overview-card float-1">
    <div class="card-icon">🎭</div>
    <h3>Two Teams, One Goal</h3>
    <p>Play as sneaky robbers or determined cops in fast-paced rounds</p>
</div>
```

### Step 2: Copy and Paste

1. Copy an entire card (including all tags)
2. Paste it after the last card
3. Modify the content:
   - Change `float-1` to `float-4`
   - Change the emoji
   - Change the heading
   - Change the description

**Example:**
```html
<div class="overview-card float-4">
    <div class="card-icon">🌍</div>
    <h3>Multiple Maps</h3>
    <p>Explore different heist locations with unique layouts and challenges</p>
</div>
```

---

## Part 3: Adding More Polaroid Images

### Step 1: Find the Polaroid Section

**Search for:** "polaroid-grid" (around line 145)

### Step 2: Copy a Polaroid

Copy this entire block:
```html
<div class="polaroid tilt-left">
    <div class="polaroid-image">
        <div class="placeholder-image image-1">
            <span class="placeholder-text">🎮<br>Game Screenshot<br>Coming Soon!</span>
        </div>
    </div>
    <div class="polaroid-caption">Robbers in action!</div>
</div>
```

### Step 3: Paste and Modify

1. Paste after the last polaroid
2. Alternate tilt: `tilt-left` or `tilt-right`
3. Change caption text
4. Change image class: `image-1` → `image-4`

**Example:**
```html
<div class="polaroid tilt-left">
    <div class="polaroid-image">
        <div class="placeholder-image image-4">
            <span class="placeholder-text">🏆<br>Game Screenshot<br>Coming Soon!</span>
        </div>
    </div>
    <div class="polaroid-caption">Epic victories!</div>
</div>
```

### Step 4: Add Image Gradient (Optional)

**Open:** `css/styles.css`

**Find:** `.placeholder-image.image-3` (around line 455)

**Add after it:**
```css
.placeholder-image.image-4 {
    background: linear-gradient(135deg, var(--color-purple) 0%, var(--color-blue) 100%);
}
```

---

## Part 4: Creating a Brand New Section

### Full Section Template

Here's a complete section template you can customize:

```html
<!-- YOUR NEW SECTION -->
<section class="your-section-name">
    <div class="container">
        <h2 class="section-title slide-up">Your Section Heading</h2>
        <p class="section-subtitle">A short description of this section</p>

        <div class="your-grid-name">
            <!-- First Card -->
            <div class="your-card-class">
                <div class="card-icon">🎮</div>
                <h3>Card Title</h3>
                <p>Card description goes here.</p>
            </div>

            <!-- Second Card -->
            <div class="your-card-class">
                <div class="card-icon">🎯</div>
                <h3>Another Card</h3>
                <p>Another description here.</p>
            </div>

            <!-- Add more cards... -->
        </div>
    </div>
</section>
```

### Where to Insert It

Place your new section between existing sections. For example:
- After features section
- Before showcase section
- After email signup

### Styling Your New Section

**Add CSS for your section in** `css/styles.css`:

```css
/* YOUR NEW SECTION */
.your-section-name {
    padding: var(--spacing-xl) 0;
    background: var(--color-bg-main);
}

.your-grid-name {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.your-card-class {
    background: var(--color-bg-light);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    text-align: center;
    box-shadow: var(--shadow-md);
    border: 4px solid var(--color-primary);
    transition: transform 0.3s ease;
}

.your-card-class:hover {
    transform: translateY(-10px);
}
```

**Replace:** `your-section-name`, `your-grid-name`, and `your-card-class` with actual names!

---

## Part 5: Real-World Examples

### Example 1: Adding a "Team" Section

**HTML (add before footer):**
```html
<!-- TEAM SECTION -->
<section class="team">
    <div class="container">
        <h2 class="section-title slide-up">Meet the Makers</h2>
        <p class="section-subtitle">The awesome people behind Snatchers</p>

        <div class="team-grid">
            <div class="team-card">
                <div class="team-emoji">👨‍💻</div>
                <h3>Alex</h3>
                <p>Lead Developer</p>
            </div>

            <div class="team-card">
                <div class="team-emoji">🎨</div>
                <h3>Sam</h3>
                <p>Artist & Designer</p>
            </div>

            <div class="team-card">
                <div class="team-emoji">🎵</div>
                <h3>Jordan</h3>
                <p>Sound Designer</p>
            </div>
        </div>
    </div>
</section>
```

**CSS (add to styles.css):**
```css
/* TEAM SECTION */
.team {
    padding: var(--spacing-xl) 0;
    background: var(--color-bg-main);
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.team-card {
    background: var(--color-bg-light);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    text-align: center;
    box-shadow: var(--shadow-md);
    border: 4px solid var(--color-purple);
    transition: transform 0.3s ease;
}

.team-card:hover {
    transform: scale(1.05) rotate(-2deg);
}

.team-emoji {
    font-size: 4rem;
    margin-bottom: var(--spacing-sm);
}

.team-card h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-xs);
    color: var(--color-text-dark);
}

.team-card p {
    color: var(--color-text-muted);
    font-size: 1.1rem;
}
```

### Example 2: Adding an FAQ Section

**HTML:**
```html
<!-- FAQ SECTION -->
<section class="faq">
    <div class="container">
        <h2 class="section-title slide-up">Got Questions?</h2>

        <div class="faq-list">
            <div class="faq-item">
                <h3>When does the game launch?</h3>
                <p>We're aiming for late 2025! Sign up to get notified.</p>
            </div>

            <div class="faq-item">
                <h3>What platforms?</h3>
                <p>PC, with console versions planned for later!</p>
            </div>

            <div class="faq-item">
                <h3>How many players?</h3>
                <p>Up to 16 players in chaotic multiplayer matches!</p>
            </div>
        </div>
    </div>
</section>
```

**CSS:**
```css
/* FAQ SECTION */
.faq {
    padding: var(--spacing-xl) 0;
    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-orange) 100%);
}

.faq-list {
    max-width: 800px;
    margin: var(--spacing-lg) auto 0;
}

.faq-item {
    background: var(--color-bg-light);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
    box-shadow: var(--shadow-md);
    border: 3px solid var(--color-text-dark);
}

.faq-item h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-dark);
}

.faq-item p {
    font-size: 1.1rem;
    color: var(--color-text-muted);
}
```

---

## Part 6: Removing Sections

Don't want a section? You can delete it!

### How to Remove a Section

1. **Find the section** you want to remove
2. **Select from** `<section class="...">` **to** `</section>`
3. **Delete it**
4. **Save and refresh**

**Tip:** Don't delete! Comment it out instead:
```html
<!--
<section class="features">
    ... entire section ...
</section>
-->
```

Now it's hidden but you can bring it back later!

---

## Quick Addition Checklist

### Before Adding:
- [ ] Save a backup copy of your files
- [ ] Know what you want to add
- [ ] Have content ready (text, emojis, etc.)

### When Adding:
- [ ] Copy the entire section (opening to closing tag)
- [ ] Paste in the right location
- [ ] Update class names (use next number)
- [ ] Change content (text, emojis, images)
- [ ] Add CSS styling if needed
- [ ] Save both HTML and CSS files

### After Adding:
- [ ] Hard refresh browser (`Ctrl+Shift+R`)
- [ ] Check desktop view
- [ ] Check mobile view
- [ ] Fix any spacing issues
- [ ] Test hover effects

---

## Pro Tips

### 1. Use Comments

Add comments to mark your sections:
```html
<!-- ===== MY CUSTOM SECTION ===== -->
<section class="my-section">
    ...
</section>
```

### 2. Keep Consistent Spacing

Match the indentation style of existing code:
```html
<section>
    <div>           <!-- 4 spaces -->
        <h2>Text</h2>   <!-- 8 spaces -->
    </div>
</section>
```

### 3. Test Responsive Design

After adding sections, check how they look on mobile:
1. Press `F12`
2. Click device toolbar
3. Test different screen sizes

### 4. Copy From Similar Sections

Want a section like the features? Copy the features section and modify it!

### 5. Use Grid for Consistency

Most sections use CSS Grid:
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

This makes sections automatically responsive!

---

## Troubleshooting

### Problem: New section doesn't appear!

**Check:**
1. Did you paste it inside the `<body>` tag?
2. Did you include both opening and closing tags?
3. Did you save the file?
4. Did you refresh the browser?

### Problem: Layout is broken after adding section!

**Possible causes:**
- Missing closing tag (`</div>`, `</section>`)
- Tags in wrong order
- Typo in class name

**Solution:**
- Press `Ctrl+Z` to undo
- Check that every opening tag has a closing tag
- Validate your HTML: validator.w3.org

### Problem: New section has no styling!

**Check:**
1. Did you add CSS for the new section?
2. Are class names spelled correctly (case-sensitive!)
3. Is the CSS in the right file (`css/styles.css`)?
4. Did you save the CSS file?

### Problem: Cards aren't side-by-side!

**Solution:**
Add this CSS:
```css
.your-grid-name {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-md);
}
```

---

## What's Next?

You now know how to add custom sections! Ready to put your site online?

**Next guide:** [Uploading Your Site](05-uploading-site.md) - Put it on the internet!

---

## Quick Reference

### Section Structure
```html
<section class="section-name">
    <div class="container">
        <h2 class="section-title">Title</h2>
        <div class="grid-name">
            <!-- Cards here -->
        </div>
    </div>
</section>
```

### Card Structure
```html
<div class="card-class">
    <div class="icon">🎮</div>
    <h3>Title</h3>
    <p>Description</p>
</div>
```

### Grid CSS
```css
.grid-name {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-md);
}
```

### Keyboard Shortcuts
- **Copy:** `Ctrl+C` / `Cmd+C`
- **Paste:** `Ctrl+V` / `Cmd+V`
- **Undo:** `Ctrl+Z` / `Cmd+Z`
- **Find:** `Ctrl+F` / `Cmd+F`

---

**Fantastic!** You can now customize your site completely! 🚀

Ready to share it with the world? Check out the uploading guide!
