# Copilot / AI agent instructions for MUNASUR site

Purpose
- Provide concise, actionable guidance so an AI coding agent can be immediately productive in this static site repo.

Repo snapshot
- Single-page static site: `index.html` + `style.css` and images in `imagenes/`.
- No build system, no Node/Python deps, no tests. Preview by serving files with a static server.

What to edit
- HTML changes: edit `index.html` for content, structure and links.
- Styling: edit `style.css` for layout and visual changes.
- Assets: add images under `imagenes/institucional/` or `imagenes/varias/` and reference them with relative paths.

Important patterns & conventions (project-specific)
- Single-page sections identified by `id` anchors: `#inicio`, `#nosotros`, `#sumate`, `#noticias`, `#contacto` — prefer anchor-preserving edits.
- Sponsor scroller: repeated `<div class="scroller-item"><img src="imagenes/varias/..."></div>`; maintain order and duplicate entries intentionally used for continuous scrolling.
- External links: `https://munasur.org/sumate` opens in a new tab (`target="_blank"`). Preserve target when updating.
- Image formats mixed (`.png`, `.jpg`, `.webp`); keep file extensions and names when replacing images to avoid breaking references.
Structural safety rules (MUST FOLLOW)
- DO NOT change the overall HTML structure, section order, or existing section `id`s without explicit user confirmation.
- DO NOT rename, remove, or merge sections (`#inicio`, `#nosotros`, `#sumate`, etc.) unless the user explicitly asks for it.
- If a requested change would require structural modifications, STOP and ask before making changes.
- Prefer minimal, localized edits over refactors.


Known issues discovered
- `index.html` ends with a duplicated closing `</html>` tag — remove the extra `</html>` if modifying footer or closing tags.

Local preview & quick checks (commands)
- Quick preview using Python 3:

```bash
python -m http.server 8000

# then open http://localhost:8000
```

- Or use VS Code Live Server extension or `npx serve` if preferred.

Validation steps for changes
- After edits, run a quick static preview and verify:
  - All images load (no 404s in browser devtools network tab).
  - Anchor navigation works and header nav links scroll to sections.
  - Sponsor scroller still displays smoothly (visual smoke test).

Commit & PR guidance
- Keep commits focused and small: one logical change per commit (content vs style vs assets).
- When adding images, include the image file(s) in the same commit as the HTML/CSS change that references them.

If you need more context
- Open `index.html` and `style.css` to see current structure and classes.
- Ask maintainers to describe hosting (if there's a preferred CDN, image optimization workflow, or automatic deploy).

If anything above is unclear or you'd like more examples (e.g., how to update the sponsor scroller or add a new section), ask and I'll iterate.
