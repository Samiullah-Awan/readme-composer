# GitHub Profile README.md Composer

A gorgeous, responsive, visual builder for crafting professional and eye-catching GitHub Profile README files. Designed with modern aesthetics (dark/light themes, sleek card layouts, interactive toggles, glassmorphism), it compiles configurations dynamically to GitHub Flavored Markdown (GFM) strings.

## Features
- **Visual Split-Screen workspace**: View and edit raw markdown output side-by-side with a real-time parsed GFM preview panel.
- **Interactive Tech Stack Badges**: Filter, search, and click to select technologies (Frontend, Backend, Database, Cloud/DevOps, Mobile, Tools) to generate beautifully colored badges powered by [Shields.io](https://shields.io) and [Simple Icons](https://simpleicons.org).
- **Social Connectors**: Quick input fields with preset badge layouts and styles (For the Badge, Flat, Flat-Square, Plastic, Social).
- **GitHub Analytics widgets**: Support for top-languages graph, general stats, streaks, profile trophies, and daily activity.
- **Custom Add-ons**: Built-in integrations for visitor hit count badge, dynamic programming jokes, randomized developer quote cards, and support links (Buy Me A Coffee).
- **Theme support**: Supports dynamic system light/dark settings.
- **Vite powered server**: Blazing fast hot module reloading and dev bundle.

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run local dev server
```bash
npm run dev
```

### 3. Build production bundle
```bash
npm run build
```

## Structure
- [index.html](file:///C:/Projects/readme-composer/index.html) — Core workspace UI.
- [styles.css](file:///C:/Projects/readme-composer/styles.css) — Custom theme styling, interactive selections, layout, and GFM overrides.
- [app.js](file:///C:/Projects/readme-composer/app.js) — Form event handlers, templates preset collection, markdown compilations, and GFM preview parsing.
