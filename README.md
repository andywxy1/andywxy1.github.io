# Xiangyi (Andy) Wen - Personal Website

A professional portfolio website showcasing my experience as a Data Scientist specializing in Product Analytics and Experimentation.

## 🚀 Quick Start - Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `your-username.github.io` (replace `your-username` with your actual GitHub username)
   - Example: If your username is `andywen`, name it `andywen.github.io`
4. Set the repository to **Public**
5. Click "Create repository"

### Step 2: Upload Your Website Files

#### Option A: Using GitHub Web Interface (Easiest)
1. In your new repository, click "uploading an existing file"
2. Drag and drop these three files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Scroll down and click "Commit changes"

#### Option B: Using Git Command Line
```bash
# Navigate to the folder containing your website files
cd /path/to/your/website/folder

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Add personal website"

# Add your GitHub repository as remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (top menu)
3. Scroll down and click "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select `main` and `/ (root)`
6. Click "Save"

### Step 4: Access Your Website

Your website will be live at: `https://your-username.github.io`

It may take a few minutes for the site to go live. Once ready, you can share this link with recruiters!

## 🎨 Customization

### Update Your Information

To update any information on the website:

1. Edit the `index.html` file
2. Commit and push changes to GitHub:
   ```bash
   git add index.html
   git commit -m "Update information"
   git push
   ```
3. Changes will appear on your live site within a few minutes

### Customize Colors

To change the color scheme, edit the CSS variables in `styles.css` (lines 1-12):

```css
:root {
    --color-primary: #0f1419;      /* Main dark color */
    --color-accent: #c9a97e;       /* Gold accent color */
    --color-background: #fafaf8;   /* Background color */
    /* ... etc ... */
}
```

### Add Your LinkedIn URL

Make sure to update the LinkedIn links in `index.html` with your actual LinkedIn profile URL:
- Search for `linkedin.com/in/xiangyi-wen` and replace with your LinkedIn username

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Interactive hover effects
- ✅ Professional typography using Playfair Display and IBM Plex Mono
- ✅ Optimized for recruiter viewing
- ✅ Fast loading and SEO-friendly

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid, animations
- **Vanilla JavaScript** - Scroll animations and interactions
- **Google Fonts** - Playfair Display, IBM Plex Mono, Work Sans

## 📊 Sections

1. **Hero** - Name and key metrics
2. **About** - Professional summary and contact info
3. **Education** - University of Pennsylvania & University of Washington
4. **Experience** - Work history with achievements
5. **Skills** - Technical skills categorized by domain
6. **Contact** - Call-to-action with email and LinkedIn

## 📝 Tips for Recruiters

This website is designed to give recruiters a quick, comprehensive view of my:
- **Core competencies** in Product Analytics and Data Science
- **Quantifiable achievements** (15% churn reduction, 85% model accuracy, etc.)
- **Technical breadth** across ML, cloud platforms, and analytics tools
- **Educational background** from top-tier institutions

## 🆘 Troubleshooting

**Website not showing up?**
- Wait 5-10 minutes after enabling GitHub Pages
- Make sure repository name is exactly `your-username.github.io`
- Verify files are in the root directory (not in a subfolder)
- Check that repository is set to Public

**Need to make changes?**
- Edit files locally or directly on GitHub
- Commit and push changes
- Website updates automatically within minutes

## 📧 Contact

- **Email:** Andywen718@gmail.com
- **Phone:** (206) 295-8820
- **Location:** Philadelphia, PA

---

Built with attention to detail for maximum impact with recruiters and hiring managers.
