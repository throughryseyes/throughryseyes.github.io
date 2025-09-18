# Through Ry’s Eyes — Website

Monochrome, low-key portfolio site. Free to host on GitHub Pages or Netlify.

## Quick edit
- `index.html`: name, copy, cities, services, pricing.
- `script.js`: set your real email.
- Replace images in `assets/` with your photos (JPG, 1600–2000px long edge).

## Deploy (free)
**GitHub Pages**
1. Create a repo named `<your-username>.github.io`.
2. Upload all files from this folder to the repo root.
3. Visit `https://<your-username>.github.io`.

**Netlify**
1. Create an account.
2. Drag-and-drop this folder to the dashboard.

---


## Image import (from RAW)
You provided Canon RAW files (.CR3). Browsers can’t display CR3 directly, so export them to JPG (sRGB, long edge ~1600–2000px, quality 70–85) and place them in `assets/` with these exact names to match the portfolio HTML:

- IMG_0105.jpg
- IMG_0141.jpg
- IMG_0159.jpg
- IMG_0169.jpg
- IMG_0196.jpg
- IMG_0026.jpg
- IMG_0055.jpg
- IMG_0057.jpg
- IMG_0075.jpg
- IMG_0080.jpg

Tip (Lightroom / Capture One / Darktable):
- Apply your B&W look, export as JPG to `assets/`
- Keep filenames exactly as above (e.g., IMG_0105.jpg)
- That’s it — the gallery will pick them up automatically.

## Deploy (step-by-step)

### GitHub Pages (free)
1. Create a GitHub account if you don’t have one.
2. Make a new repository named **&lt;your-username&gt;.github.io** (replace with your username).
3. Drag and drop **all** files from this folder into the repo.
4. Click **Commit**. Your site goes live at `https://<your-username>.github.io` within a minute.

### Netlify (free)
1. Go to **netlify.com** and create an account.
2. Click **Add new site → Deploy manually**.
3. **Drag & drop** this entire folder onto the box.
4. Netlify gives you a live URL instantly; connect a custom domain later if you want.

---
**Notes**
- Your contact form uses `mailto:` and is already set to **ryanfitz@live.ca**.
- Replace images later by overwriting files in **/assets**.
- Presets included: `TRE-Muted-BW-Spice.xmp` (Lightroom) and `TRE-Muted-BW-Spice.dtstyle` (Darktable).
