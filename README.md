# Personal Website — Source

Source code for [linh222.github.io/personal_website](https://linh222.github.io/personal_website) (Quang-Linh Tran's personal academic website). React + Vite + Tailwind CSS + framer-motion.

## Branches

- **`source`** (this branch): the React source code. Edit here.
- **`main`**: the built output served by GitHub Pages. Never edit by hand — it is overwritten on every deploy.

## Editing content

All website content (bio, teaching, publications, projects, awards, service) lives in one file:

```
src/data/content.js
```

Layout and components are in `src/App.jsx`. Theme (colors, fonts, animations) is in `tailwind.config.js`.

## Development

```bash
npm install
npm run dev        # local dev server with hot reload
```

## Deploying

```bash
npm run deploy     # builds and publishes dist/ to the main branch
```

GitHub Pages serves the `main` branch, so the site updates a minute or two after deploy.
