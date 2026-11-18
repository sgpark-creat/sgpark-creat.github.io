# SeongGyeong Park — Academic Website

## Upload to GitHub Pages

1. Open https://github.com/sgpark-creat/sgpark-creat.github.io
2. Choose **Add file → Upload files**. Upload **the contents of this folder** (index.html, content.json, `assets/site.js`, `admin/index.html`, `admin/editor.js`) preserving folders. The easiest reliable method is GitHub Desktop or uploading folders by drag-and-drop on the repository upload screen. Do not upload the ZIP as a single file.
3. Commit changes to the `main` branch.
4. In **Settings → Pages**, choose **Deploy from a branch**, **main**, **/(root)**, then Save.
5. Visit https://sgpark-creat.github.io/ after publishing.

## Edit content using /admin/

This project includes a **working browser-based editor**, not Decap CMS. It connects directly to the GitHub API. No OAuth server or external CMS account is needed.

1. Go to https://github.com/settings/personal-access-tokens/new while signed into GitHub.
2. Create a **fine-grained personal access token** with repository access set to **Only select repositories → sgpark-creat.github.io**.
3. Under **Repository permissions**, grant **Contents: Read and write**. Use a short expiration (e.g., 30 days). GitHub may require additional permissions automatically.
4. Open https://sgpark-creat.github.io/admin/ and paste the token into the connection field. The token is kept **only in page memory**, not saved to localStorage, cookies, repository files, or server.
5. Edit individual sections and click **Publish changes to website**. Changes commit `content.json` to the `main` branch. Refresh the public page after GitHub Pages deploys.
6. Disconnect or close the tab when finished. Revoke a token immediately if accidentally exposed.

**Important:** The `/admin/` URL itself is publicly viewable; GitHub authorization protects editing. Anyone can load the form, but only a user with an authorized token can publish. The editor does not ask for your GitHub password.

## CV / Google Scholar / profile photo

- Google Scholar is already linked in `content.json`. This is a **profile link**, not automatic publication syncing.
- To link a CV, upload a PDF to the repository (for example `files/CV.pdf`) and enter `https://sgpark-creat.github.io/files/CV.pdf` in the **CV & Links** editor. To update it, replace the PDF using the same filename.
- To show a portrait, upload a photo to `assets/` and enter its public URL in **About → Portrait image URL**.
- Manuscripts and presentations are editable in **Publications**. Verify citations and statuses before publishing.

## Security / limitations

- GitHub Pages is a public static host; there is no password-protected admin page on the server. The write API requires a GitHub token, and the token is never included in site source code.
- A fine-grained token can write to the selected repository. Keep it private, use minimal scope, short expiration, and revoke when not needed.
- This solution avoids the extra OAuth infrastructure required for Decap CMS on GitHub Pages. A hosted CMS with login can be added later.
- The editor needs an internet connection and GitHub API access. It assumes the repository's publishing branch is `main`.
