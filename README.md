# Robotic Nexus

> **Empowering Robotics Innovation** — Infrastructure, labs, mentorship, and funding support for students, startups, and universities building the next generation of robotics.

A production-ready, futuristic marketing site for the Robotic Nexus brand, built with **React + Vite + Tailwind CSS + Framer Motion + React Router**.

---

## Tech Stack

- **React 18** — component-based UI
- **Vite 5** — fast dev server + build tooling
- **Tailwind CSS 3** — utility-first styling with a custom neon/dark theme
- **Framer Motion** — smooth entry/scroll animations
- **React Router v6** — client-side routing
- **React Icons** — Heroicons v2 + Font Awesome 6

---

## Folder Structure

```
robotic-nexus/
├── public/
│   └── favicon.svg                # Nexus logo favicon
├── src/
│   ├── components/
│   │   ├── Footer.jsx             # Global footer with nav + socials
│   │   ├── Logo.jsx                # Brand mark (reusable)
│   │   ├── Navbar.jsx              # Sticky responsive navbar
│   │   ├── PageHeader.jsx          # Shared page hero
│   │   ├── PageTransition.jsx      # Motion wrapper for route transitions
│   │   ├── ScrollToTop.jsx         # Resets scroll on route change
│   │   ├── SectionTitle.jsx        # Reusable section heading
│   │   └── ServiceCard.jsx         # Feature/service card
│   ├── pages/
│   │   ├── About.jsx               # Vision, mission, timeline, team
│   │   ├── Contact.jsx             # Contact form + info + map placeholder
│   │   ├── Home.jsx                # Hero, offerings, benefits, CTA
│   │   ├── NotFound.jsx            # 404 page
│   │   ├── Register.jsx            # Full registration form with validation
│   │   └── Services.jsx            # Services, process, plans
│   ├── App.jsx                     # Router + layout shell
│   ├── index.css                   # Tailwind base + theme tokens
│   └── main.jsx                    # React entry point
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- **Node.js 18+** — [nodejs.org](https://nodejs.org)
- **npm** (ships with Node) or **pnpm / yarn**

### 1. Install dependencies

From the project root:

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

The site opens automatically at **http://localhost:5173** with hot module reload.

### 3. Build for production

```bash
npm run build
```

The optimized output lands in `dist/`. You can preview the production build locally with:

```bash
npm run preview
```

---

## Running in VS Code

1. Open VS Code and run **File → Open Folder…**, then select this project folder.
2. Open a new terminal (`Ctrl + \`` on Windows, `Cmd + \`` on macOS).
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Click the `http://localhost:5173` link in the terminal (or it will open automatically).

**Recommended VS Code extensions**
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier – Code formatter
- ESLint

---

## Pages Overview

| Route        | Page       | Highlights                                                                 |
|--------------|-----------|----------------------------------------------------------------------------|
| `/`          | Home      | Hero, stats, about intro, 6 offerings, benefits, CTA                        |
| `/about`     | About     | Vision + mission, 4 guiding values, timeline, team grid                     |
| `/services`  | Services  | 4 detailed services, 4-step process, 3-tier pricing                         |
| `/register`  | Register  | Full application form with validation and success state                    |
| `/contact`   | Contact   | Contact cards, contact form, map placeholder                                |
| `*`          | NotFound  | Branded 404 page                                                            |

---

## Design System

The theme lives in [tailwind.config.js](tailwind.config.js):

- **Colors** — `nexus-bg` (#05060f), `nexus-card`, `nexus-border`, `nexus-neon` (cyan), `nexus-violet`, `nexus-pink`
- **Fonts** — `Orbitron` for display headings, `Inter` for body
- **Gradients** — `bg-nexus-gradient` (cyan → violet → pink)
- **Shadows** — `shadow-neon`, `shadow-neonHover` for glow effects
- **Reusable classes** (in [src/index.css](src/index.css)):
  - `.btn-primary`, `.btn-ghost` — CTA buttons
  - `.card`, `.card-hover` — surface cards
  - `.eyebrow` — small labels above headings
  - `.gradient-text` — multi-color gradient text
  - `.grid-bg` — animated grid background
  - `.input-field` — form inputs

### Logo Idea

The Nexus mark is a minimal **radar / hub-and-spoke circle** with four axis markers — representing a central node connecting multiple fields (labs, mentors, capital, community). It renders as a live SVG in [src/components/Logo.jsx](src/components/Logo.jsx) and lives as a favicon in [public/favicon.svg](public/favicon.svg). Colors use the signature cyan → violet gradient.

### Tagline

> **Empowering Robotics Innovation.**

Alternative taglines you can drop in:
- *The infrastructure layer for robotics builders.*
- *From prototype to production — we've got the stack.*
- *Build the robots of tomorrow, today.*

---

## Connecting a Real Backend

Both forms (`/register` and `/contact`) currently simulate submission with a short timeout. To wire them up to a real API, replace the `await new Promise(...)` block in:

- [src/pages/Register.jsx](src/pages/Register.jsx) — inside `handleSubmit`
- [src/pages/Contact.jsx](src/pages/Contact.jsx) — inside `handleSubmit`

with your `fetch` / `axios` call, e.g.:

```js
const res = await fetch('/api/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
if (!res.ok) throw new Error('Submission failed');
```

---

## Responsive & Accessibility

- Fully responsive from 360px mobile up to 1920px desktop
- All interactive elements are keyboard-focusable with visible focus rings
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<form>`)
- Meta tags and Open Graph tags in [index.html](index.html)
- Forms validate client-side and surface clear error messages

---

## License

MIT — build freely, ship proudly.
