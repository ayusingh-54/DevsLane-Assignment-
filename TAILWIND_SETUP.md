# Tailwind CSS Configuration Guide

## ✅ Setup Complete!

Tailwind CSS is now configured globally for your entire project.

## 📁 File Structure

```
DevsLane Assiment/
├── src/
│   └── input.css          # Tailwind source file
├── dist/
│   └── output.css         # Generated Tailwind CSS (use this in HTML)
├── tailwind.config.js     # Tailwind configuration
├── package.json           # NPM scripts
└── Assignment*/           # Your assignment folders
```

## 🚀 How to Use in Any Folder

### 1. Link the CSS in your HTML:

```html
<link rel="stylesheet" href="../dist/output.css" />
```

**Path adjustments based on folder depth:**

- Root folder: `href="./dist/output.css"`
- One level deep (Assignment51.2/): `href="../dist/output.css"`
- Two levels deep: `href="../../dist/output.css"`

### 2. Use Tailwind Classes:

```html
<h1 class="text-4xl font-bold text-blue-600">Hello World</h1>
<div class="bg-green-500 p-4 rounded-lg shadow-md">Content here</div>
```

## 🔧 NPM Scripts

### Build CSS once:

```bash
npm run build
```

### Watch for changes (auto-rebuild):

```bash
npm run watch
```

## 📝 Example HTML Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page</title>
    <link rel="stylesheet" href="../dist/output.css" />
  </head>
  <body class="bg-gray-100 p-8">
    <h1 class="text-3xl font-bold text-blue-600">Tailwind CSS Works!</h1>
  </body>
</html>
```

## 🎨 Common Tailwind Classes

- **Colors**: `text-red-500`, `bg-blue-600`, `border-green-400`
- **Spacing**: `p-4` (padding), `m-8` (margin), `px-6` (horizontal padding)
- **Typography**: `text-xl`, `font-bold`, `text-center`
- **Layout**: `flex`, `grid`, `container`, `mx-auto`
- **Borders**: `border`, `border-2`, `rounded`, `rounded-lg`
- **Shadows**: `shadow`, `shadow-md`, `shadow-lg`

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

---

**Note**: After making changes to your HTML, run `npm run build` or keep `npm run watch` running to update the CSS.
