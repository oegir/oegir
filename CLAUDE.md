# CLAUDE.md

Guidance for Claude when working in this repository.

## Project overview

- Lightweight Docsify 5 resume website for Aleksei Petrov, published at `https://oegir.github.io/oegir/#/` (GitHub Pages).
- The site has no build step. `package.json` exists only for the Playwright test suite.
- This repository is the single source of truth for Aleksei's professional profiles. LinkedIn, job application forms, and talent platform profiles are filled in from `docs/resume.md`, not the other way around.

## Repository structure

- `index.html` - page shell, Docsify configuration, language auto-redirect, per-language sidebar selection, JSON-LD structured data, canonical and `hreflang` links.
- `docs/resume.md` - English resume; primary source of truth for resume content.
- `docs/ru/resume.md`, `docs/bg/resume.md` - Russian and Bulgarian versions derived from the English resume.
- `docs/_sidebar.md`, `docs/ru/_sidebar.md`, `docs/bg/_sidebar.md` - per-language navigation; links point to headings in the matching resume file.
- `styles.css` - all project-specific visual styling.
- `llms.txt`, `robots.txt`, `sitemap.xml` - discovery files for crawlers and AI assistants; they link to the raw Markdown resumes.
- `test/` - Playwright acceptance tests and a small static server (`test/server.js`, port 8001).
- `__tmp/` - temporary project files that do not belong in the repository, excluded from Git via `.git/info/exclude` (not `.gitignore`). The owner clears it manually, so files may linger and be stale.
  - Never commit files from `__tmp/` or link to them from tracked files.
  - Do not rely on its contents as a source of facts; use `docs/resume.md`.
  - Save generated temporary outputs here (for example, drafts and exports) instead of outside the repository.
  - Save resume versions tailored to a specific vacancy in `__tmp/TailoredResumes/`.
  - Do not delete or clean up existing files there unless asked.
  - `__tmp/prompts/` holds plans (see below).
- `README.md` - short project description and links.

## Content rules

- Keep resume content in the `docs/*/resume.md` files. Do not duplicate resume text in `index.html` or `styles.css`.
- Treat the English resume as primary: apply new structural and content changes to `docs/resume.md` first, then update the Russian and Bulgarian versions from it.
- Preserve intentional local edits in the Russian and Bulgarian versions (cultural, formatting, slang, and other language-specific choices). Never sync them back to English and never overwrite them from English.
- When a heading changes in a resume file, update the anchors in the matching `_sidebar.md`.
- Keep contact links, dates, job titles, company names, locations, and technology names accurate and consistent across all language versions, `index.html` JSON-LD, `README.md`, and `llms.txt`.
- Preserve the existing professional, concise tone and Markdown structure.
- Do not invent or embellish experience. If a profile or application needs a fact that is not in `docs/resume.md`, flag it and propose adding it to the resume first, so downstream profiles stay consistent with the repository.
- Use standard Markdown supported by Docsify. Do not introduce a build-time Markdown or templating dependency.
- Use ASCII in source files unless a real name, place, or localized content requires another character set.

## Language of repository artifacts

- Write everything created with AI in English: commit messages, issues, pull request descriptions, code comments, documentation, plans. The only exception is localized resume content.

## Plans

- Save every plan in `__tmp/prompts/` at the repository root, and nowhere else.
- Name plan files `__tmp/prompts/plan-<topic>.prompt.md`. The `plan-` prefix and `.prompt.md` suffix are what matter; `<topic>` is a short descriptive name.
- Plans are disposable: the owner reviews, edits, postpones, reorders, or deletes them manually. Do not rename, clean up, or delete existing plans, and do not treat them as a source of truth or as a queue of pending work unless asked to execute a specific plan.

## GitHub issues

- Keep issues focused on recording the problem in the shortest clear form, ideally one or two sentences.
- Do not add implementation plans or extended context unless asked.

## Design and frontend

- Keep the page responsive on narrow screens.
- Preserve existing typography, spacing, and color variables unless a visual change is intentional.
- Prefer CSS custom properties and focused selectors; avoid unrelated formatting changes.
- Keep external frontend dependencies aligned with the existing Docsify 5 CDN links in `index.html`.

## Local development

From the repository root:

```bash
docsify serve .
```

Open the URL reported by the CLI, usually `http://localhost:3000`.

## Validation

- Run the acceptance tests after changing resume files, sidebars, `index.html`, or discovery files:

  ```bash
  npm test
  ```

  The tests check per-language sidebars and language switch links, discovery files, raw resume sources, and canonical/`hreflang` metadata.
- After changing `docs/*/resume.md`, check the rendered page and links in a browser.
- After changing `index.html` or `styles.css`, check the page at desktop and mobile widths and look for console errors or broken resources.
- Keep changes limited to the files needed for the requested behavior.
