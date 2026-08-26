# Project Instructions

## Project Overview

- This repository contains a lightweight Docsify resume website for Aleksei Petrov.
- There is no application build system or package manifest in the repository.
- The published site is available at `https://oegir.github.io/oegir/#/`.

## Repository Structure

- `index.html` is the page shell and Docsify configuration.
- `docs/resume.md` is the source of truth for the resume content.
- `styles.css` contains all project-specific visual styling.
- `README.md` contains project usage and local development instructions.

## Editing Guidelines

- Keep content changes in `docs/resume.md`; do not duplicate resume text in `index.html` or `styles.css`.
- Treat the English resume as primary: apply new structural and content changes there first, then update other language versions from it. Preserve intentional local edits for cultural, formatting, slang, and other language-specific needs; never sync them back to English or overwrite them from English.
- Preserve the existing professional, concise resume tone and Markdown structure.
- Keep contact links, dates, job titles, locations, and technology names accurate and consistent.
- Use standard Markdown supported by Docsify. Avoid introducing a build-time Markdown or templating dependency.
- Save every plan in `__tmp/prompts/` at the repository root. Name plan files `plan-<topic>.prompt.md`, using lowercase kebab-case for `<topic>`; do not save plans elsewhere.
- Keep the page responsive on narrow screens and preserve the existing typography, spacing, and color variables unless a visual change is intentional.
- Prefer CSS custom properties and focused selectors when changing the design. Avoid unrelated formatting changes.
- Keep external frontend dependencies aligned with the existing Docsify 5 CDN links in `index.html`.
- Use ASCII text in source files unless a real resume name, place, or other content requires another character set.

## Local Development

From the repository root, run:

```bash
docsify serve .
```

Open the local URL reported by the CLI, typically `http://localhost:3000`.

## Validation

- After changing `docs/resume.md`, verify the rendered page and links in a browser.
- After changing `index.html` or `styles.css`, verify the page at both desktop and mobile widths.
- Check the browser console for broken resources or JavaScript errors.
- Keep changes limited to the files needed for the requested behavior.
