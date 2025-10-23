Seeker Companion / Earnings Tracker — V1.1 Release
--------------------------------------------------
Contents: static site (index.html, style.css, print.css, main.js, assets)

Quick Deploy to Netlify
1) Unzip this archive locally.
2) Go to Netlify → Sites → "Add new site" → "Deploy manually".
3) Drag & drop the *folder contents* (not the zip) into the upload area.
   - Or push this folder to a repo and connect it.
4) No build command needed; publish directory is the folder itself.

Notes
- Cache-busting querystrings added to style.css/print.css/main.js.
- On first load after deploy, the app wipes prior local test data.
- Single-page app, no server routes required.

Tag: V1.1 — packaged 2025-08-10 16:59:10
