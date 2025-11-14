# Guide 5: Uploading Your Site

Put your Snatchers website on the internet for everyone to see!

## What You'll Learn
- Different hosting options (free and paid)
- Step-by-step uploading instructions
- How to get a custom domain name
- How to update your site after it's live

---

## Choose Your Hosting Method

### Free Options (Recommended for Beginners)

| Service | Best For | Difficulty | Custom Domain |
|---------|----------|------------|---------------|
| **Netlify** | Easiest! Drag & drop | ⭐ Easy | Yes (paid) |
| **GitHub Pages** | Free custom domain | ⭐⭐ Medium | Yes (free!) |
| **Vercel** | Fast & modern | ⭐ Easy | Yes (paid) |
| **Neocities** | Retro fun | ⭐ Easy | Yes (paid) |

### Paid Options

| Service | Cost | Best For |
|---------|------|----------|
| **Namecheap** | ~$3/month | Custom domain + hosting |
| **Bluehost** | ~$3/month | WordPress alternative |
| **SiteGround** | ~$4/month | Good support |

We'll cover the two easiest: **Netlify** and **GitHub Pages**!

---

## Method 1: Netlify (Easiest!)

Netlify is perfect for beginners. Just drag and drop!

### Step 1: Create Account

1. Go to **netlify.com**
2. Click **"Sign Up"**
3. Sign up with email or GitHub
4. Verify your email

### Step 2: Prepare Your Files

1. **Find your Snatchers-Web folder**
2. **Make sure it contains:**
   - `index.html`
   - `css` folder
   - `js` folder
   - `assets` folder

**Important:** Don't zip it! Netlify wants the folder itself.

### Step 3: Upload Your Site

1. **Log in to Netlify**
2. **Drag your entire Snatchers-Web folder** onto the Netlify dashboard
   - You'll see a dotted box that says "Drag and drop your site folder here"
3. **Wait for upload** (usually takes 10-30 seconds)
4. **Done!** Netlify gives you a URL like: `random-name-123456.netlify.app`

### Step 4: Customize Your URL

1. **Click "Site settings"**
2. **Click "Change site name"**
3. **Enter a custom name:** `snatchers-game` (must be unique)
4. **Your new URL:** `snatchers-game.netlify.app`

### Step 5: Update Your Site Later

To update your site after making changes:

1. **Go to your Netlify dashboard**
2. **Click on your site**
3. **Click "Deploys"** tab
4. **Drag your updated folder** onto the upload area
5. **New version is live in seconds!**

---

## Method 2: GitHub Pages (Free Custom Domain!)

GitHub Pages is free and lets you use a custom domain at no extra cost!

### Prerequisites

- GitHub account (free)
- Basic Git knowledge (or follow along carefully)
- Git installed on your computer

### Step 1: Create GitHub Account

1. Go to **github.com**
2. Click **"Sign up"**
3. Follow the steps to create your account
4. Verify your email

### Step 2: Create a New Repository

1. **Log in to GitHub**
2. **Click the "+" icon** (top right) → "New repository"
3. **Repository name:** `snatchers-website` (or any name)
4. **Description:** "Coming soon website for Snatchers game"
5. **Make it Public** (required for free GitHub Pages)
6. **DON'T** check any boxes (README, .gitignore, license)
7. **Click "Create repository"**

### Step 3: Upload Your Files

**Option A: Using GitHub Website (Easiest)**

1. **On your new repository page, click "uploading an existing file"**
2. **Drag all your files** (index.html, css folder, js folder, assets folder)
3. **Wait for upload**
4. **Scroll down and click "Commit changes"**

**Option B: Using Git Command Line**

Open terminal/command prompt in your Snatchers-Web folder:

```bash
# Initialize Git (if not already initialized)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Snatchers coming soon site"

# Add remote (replace USERNAME and REPO with yours)
git remote add origin https://github.com/USERNAME/REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Click "Settings"** (tab at top)
3. **Scroll down and click "Pages"** (left sidebar)
4. **Under "Source", select:**
   - Branch: `main`
   - Folder: `/ (root)`
5. **Click "Save"**
6. **Wait 2-3 minutes**
7. **Your site is live at:** `username.github.io/repository-name`

### Step 5: Update Your Site

**Option A: Upload New Files on GitHub**
1. Go to your repository
2. Click on the file you want to change
3. Click the pencil icon (Edit)
4. Make changes
5. Click "Commit changes"

**Option B: Using Git**
```bash
# Make your changes to files
# Then in your terminal:

git add .
git commit -m "Updated content"
git push
```

Changes appear on your site in 2-3 minutes!

---

## Method 3: Vercel (Alternative)

Similar to Netlify but built by the Next.js team.

### Quick Steps:

1. Go to **vercel.com**
2. Sign up (free)
3. Click "New Project"
4. Import from Git or drag/drop folder
5. Click "Deploy"
6. Done!

---

## Method 4: Neocities (Fun & Retro)

Perfect if you want a retro vibe!

### Quick Steps:

1. Go to **neocities.org**
2. Sign up (free)
3. Create a site name
4. Use their file manager to upload your files
5. Your site: `sitename.neocities.org`

---

## Getting a Custom Domain Name

Want `snatchersgame.com` instead of `random-name.netlify.app`?

### Step 1: Buy a Domain

**Popular Domain Registrars:**
- **Namecheap** - Good prices, easy to use
- **Google Domains** - Simple and trusted
- **Porkbun** - Cheap and no upsells

**Typical costs:** $10-15 per year

### Step 2: Connect to Your Host

**For Netlify:**
1. Go to your site's settings
2. Click "Domain management"
3. Click "Add custom domain"
4. Enter your domain name
5. Follow instructions to update DNS settings

**For GitHub Pages:**
1. Go to Settings → Pages
2. Enter your custom domain
3. Update DNS settings at your registrar:
   - Add CNAME record pointing to `username.github.io`
   - Or A records to GitHub IPs

**DNS Settings Help:**
- [Netlify DNS Guide](https://docs.netlify.com/domains-https/custom-domains/)
- [GitHub Pages DNS Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Enabling HTTPS (Secure Connection)

**Netlify & Vercel:** Automatic! Nothing to do.

**GitHub Pages:**
1. Go to Settings → Pages
2. Check "Enforce HTTPS"
3. Wait 10 minutes for certificate

**Neocities:** Free tier doesn't support custom HTTPS

---

## Testing Your Live Site

Before sharing your site, test it thoroughly!

### Checklist:

- [ ] All pages load correctly
- [ ] All images appear
- [ ] All links work
- [ ] Fonts load properly
- [ ] Colors look correct
- [ ] Animations work
- [ ] Form works (email signup)
- [ ] Responsive on mobile
- [ ] Social icons link correctly
- [ ] Fast loading speed

### Testing Tools:

**Speed Test:**
- pagespeed.web.dev
- tools.pingdom.com

**Mobile Test:**
- search.google.com/test/mobile-friendly

**Cross-Browser Test:**
- Open in Chrome, Firefox, Safari, Edge

---

## Updating Your Live Site

### Netlify/Vercel
1. Make changes to your local files
2. Drag updated folder to dashboard
3. Done! (Updates in seconds)

### GitHub Pages
1. Make changes to your local files
2. Commit and push (or upload on GitHub)
3. Wait 2-3 minutes for changes to appear

### Pro Tip: Use Git
Once you're comfortable, use Git to track changes:
```bash
git add .
git commit -m "Updated hero section text"
git push
```

---

## Sharing Your Site

Your site is live! Now promote it:

### Social Media
- Tweet: "Check out our new game! 🎮 [URL]"
- Post on Reddit (r/gamedev, r/indiegames)
- Share on Discord servers
- Post on TikTok/Instagram

### Email
- Send to friends and family
- Email gaming influencers
- Add to your email signature

### Communities
- Post on Indie DB
- Share on itch.io
- Submit to gaming news sites

---

## Analytics (Optional)

Want to know how many people visit?

### Free Options:

**1. Google Analytics**
- Free and powerful
- Sign up at analytics.google.com
- Add tracking code to your `index.html`

**2. Plausible**
- Privacy-friendly
- Paid but simple

**3. Netlify Analytics**
- Built-in for Netlify users
- $9/month

### How to Add Google Analytics:

1. **Sign up at analytics.google.com**
2. **Create a property**
3. **Copy your tracking code** (looks like `G-XXXXXXXXXX`)
4. **Add to your `index.html` before `</head>`:**

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual tracking ID!

---

## SEO Basics (Get Found on Google)

Help people find your site!

### Quick SEO Checklist:

**1. Add a title and description** (already in your HTML!)
```html
<title>Snatchers - Coming Soon!</title>
<meta name="description" content="Get ready for chaotic multiplayer mayhem!">
```

**2. Add keywords meta tag:**
```html
<meta name="keywords" content="snatchers, multiplayer game, indie game, cops and robbers">
```

**3. Submit to Google:**
- Go to search.google.com/search-console
- Add your site
- Submit your sitemap

**4. Create a sitemap.xml** (for GitHub Pages):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2025-11-14</lastmod>
  </url>
</urlset>
```

---

## Troubleshooting

### Problem: Site shows 404 error

**GitHub Pages:**
- Wait 2-3 minutes after enabling Pages
- Make sure `index.html` is in the root folder
- Check that repository is public

**Netlify:**
- Make sure `index.html` is in the uploaded folder
- Re-upload the site

### Problem: Images don't show up

**Check:**
1. Are images in the `assets` folder?
2. Are paths correct? (`assets/image.jpg` not `/assets/image.jpg`)
3. Are filenames exact? (case-sensitive!)

### Problem: CSS/JS not loading

**Check:**
1. Are `css` and `js` folders uploaded?
2. Are paths correct in `index.html`?
3. Hard refresh: `Ctrl+Shift+R`

### Problem: Custom domain not working

**Wait 24-48 hours** for DNS propagation!

**Then check:**
1. DNS settings are correct
2. HTTPS is enabled
3. Clear your browser cache

---

## Quick Comparison

| Feature | Netlify | GitHub Pages | Vercel |
|---------|---------|--------------|--------|
| **Ease** | ⭐⭐⭐ Very Easy | ⭐⭐ Medium | ⭐⭐⭐ Very Easy |
| **Free?** | Yes | Yes | Yes |
| **Custom Domain** | Yes ($) | Yes (Free!) | Yes ($) |
| **Auto HTTPS** | Yes | Yes | Yes |
| **Update Speed** | Instant | 2-3 min | Instant |
| **Storage** | 100GB | 1GB | 100GB |

**Recommendation:** Start with Netlify! It's the easiest.

---

## What's Next?

Congratulations! Your site is live! 🎉

### Keep Improving:
1. **Add real screenshots** as you develop your game
2. **Update features** as you add them
3. **Share progress** on social media
4. **Collect emails** from interested players
5. **Listen to feedback** and improve

### Consider Adding:
- Blog for dev updates
- Presskit page for journalists
- Trailer video when ready
- Discord server link
- Steam/itch.io wishlist button

---

## Quick Reference

### Recommended: Netlify
1. Go to netlify.com
2. Sign up
3. Drag folder to dashboard
4. Done! Site is live

### Free Custom Domain: GitHub Pages
1. Create GitHub account
2. Create repository
3. Upload files
4. Enable Pages in Settings
5. Add custom domain (optional)

### Update Site:
- **Netlify:** Drag new folder
- **GitHub:** Commit & push or upload files

### Get Domain:
- namecheap.com
- porkbun.com
- Google Domains

### Add Analytics:
- Google Analytics (free)
- Netlify Analytics ($9/mo)
- Plausible (paid, privacy-focused)

---

**Your site is live! Time to start building that player base!** 🚀

Share it everywhere and get ready for launch!
