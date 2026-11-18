# SeongGyeong Park — Multi-page Academic Website

Pages: Home (`index.html`), Research, Publications, Presentations, Teaching & Leadership, CV & Contact. All pages read the **same `content.json`**. The existing `/admin/` editor updates that file and therefore updates every page.

## Publish
1. Unzip the package. Upload **all contents**, not the ZIP itself, to https://github.com/sgpark-creat/sgpark-creat.github.io/upload/main. Preserve `assets/` and `admin/` directories. Replace existing files.
2. GitHub repository Settings → Pages: deploy `main` branch, root directory.
3. Open https://sgpark-creat.github.io/ and navigate the pages.

## Photo
Upload `profile.jpg` in the repository root (beside `index.html`), or edit the portrait path in `/admin/`. The package does not contain your personal photo.

## Admin
Open `/admin/`. Use a GitHub fine-grained personal access token restricted to this repository with Contents read/write permission. Do not share or publish the token. The editor changes `content.json`, which all pages load.

## CV and publications
Upload a CV PDF separately and enter its URL/path in the editor. Google Scholar is a profile link, not automatic syncing. Verify manuscript statuses and planned conference presentation statuses before publication.

## Teaching & Advising

The separate `teaching.html` page contains seven teaching and advising appointments (2020–2026). Edit them in `/admin/` under **Teaching & Advising**. `leadership.html` is retained separately for leadership and community engagement.

## Photo galleries
The Research page includes all five supplied photos in an automatic, pausable slideshow. The Presentations page includes the three academic/conference-related images. Images live under assets/. The slideshow stops while hovered or keyboard-focused and honors reduced-motion preferences. All original content and the profile picture remain unchanged.
