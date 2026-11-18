Bíró Zsombor's Installer Download Website
==========================================

This package contains your complete, responsive Bootstrap 5 installer download website.

FILE STRUCTURE:
---------------
- main.html              : Home page with site description and link to downloads tab.
- downloads.html         : Table interface listing .exe files with download buttons and search.
- index.html             : Auto-redirects to main.html.
- images/                : header.jpg (site header) + gallery photos.
- css/gallery.css        : Gallery grid + lightbox styling.
- js/gallery.js          : Lightbox (arrows, keyboard, swipe).
- bs/                    : Contains Bootstrap 5 CSS files (bs/bootstrap.min.css).
- js/                    : Contains Bootstrap 5 bundle JS (js/bootstrap.bundle.min.js) & main search script (js/main.js).
- downloads/             : Put your .zip files here (forza_updater.zip is the Letöltés button's target).

HOW TO ADD NEW .EXE FILES:
--------------------------
1. Copy your .zip file into the `downloads/` folder.
2. Open `downloads.html` in Notepad or VS Code.
3. Find the `downloadsTable` <tbody> section.
4. Copy a <tr>...</tr> row, change the title, version, description, and update the link:
   <a href="downloads/your_file.zip" download class="btn btn-sm btn-success">Letöltés</a>

FOOTER COPYRIGHT:
-----------------
Set to: "© Bíró Zsombor 2026. All rights reserved."