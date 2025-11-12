# 🚀 Netlify Deployment Guide

## Method 1: Drag & Drop (Easiest - 2 minutes)

### Steps:

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Go to:** https://app.netlify.com

3. **Sign Up/Login:**

   - Use GitHub, GitLab, Bitbucket, or Email

4. **Drag & Drop:**

   - Drag your entire project folder onto the Netlify dashboard
   - OR click "Add new site" → "Deploy manually"
   - Drop the folder

5. **Your site is LIVE!** 🎉
   - You'll get a URL like: `https://random-name-12345.netlify.app`

---

## Method 2: Connect to GitHub (Automatic Updates)

### Steps:

1. **Push your code to GitHub:**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to:** https://app.netlify.com

3. **Click:** "Add new site" → "Import an existing project"

4. **Select:** GitHub

5. **Choose your repository:** `DevsLane-Assignment-`

6. **Build Settings:**

   - Build command: `npm run build`
   - Publish directory: `.` (root)

7. **Click:** "Deploy site"

8. **Done!** ✅
   - Auto-deploys on every git push!

---

## Method 3: Using Netlify CLI

### One-Time Setup:

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login
```

### Deploy:

```bash
# Build first
npm run build

# Deploy
netlify deploy --prod
```

---

## ⚙️ Configuration Files Already Created:

✅ `netlify.toml` - Netlify configuration
✅ `.gitignore` - Ignores node_modules
✅ `package.json` - Build scripts

---

## 📝 Important Notes:

1. **Always run `npm run build` before deploying**
2. **Your live URL will be:** `https://your-site-name.netlify.app`
3. **You can customize the domain** in Netlify settings
4. **Free hosting** - 100GB bandwidth/month

---

## 🎯 Quick Deploy Commands:

```bash
# Build
npm run build

# Test locally (optional)
# Open index.html or Assignment_51.3/index.html in browser

# Deploy to Netlify (using CLI)
netlify deploy --prod
```

---

## 🔗 Useful Links:

- Netlify Dashboard: https://app.netlify.com
- Netlify Docs: https://docs.netlify.com
- Your Repository: https://github.com/ayusingh-54/DevsLane-Assignment-

---

## 🎉 That's it! Your site is now live!
