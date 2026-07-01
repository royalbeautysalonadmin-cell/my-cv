# Abdul Saboor — Portfolio

A premium, futuristic, interactive developer portfolio for **Abdul Saboor**, Full-Stack MERN Developer.

Built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **React Three Fiber / Three.js**.

## ✨ Features

- Animated boot/loading screen and custom cursor
- Interactive **3D tech background** (React logo, database, Docker containers, floating geometry) that reacts to the mouse
- Glassmorphism UI, neon accents, smooth scroll & scroll-reveal animations
- Futuristic sticky navigation with active-section highlighting
- Sections: **Hero, About, Skills, Projects, Learning Journey, Resume, Contact**
- Interactive skill cards with animated proficiency bars
- 3D-tilt project cards with category filtering
- Working contact form (opens your email client pre-filled)
- Print-ready resume page at `/resume.html`
- SEO meta tags, Open Graph, JSON-LD structured data
- Fully responsive + `prefers-reduced-motion` friendly

## 🚀 Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## 🖼️ Personalize

1. **Profile photos** — drop two portrait photos (~800×1000) into `public/`:
   - `public/profile.jpg` → shown in the **Hero** (right side).
   - `public/profile-2.jpg` → shown in the **About** section.
   Until then a stylized "AS" monogram is shown automatically.
2. **Content** — edit everything (name, links, skills, projects, timeline) in
   [`src/data/portfolio.js`](src/data/portfolio.js).
3. **Resume** — edit [`public/resume.html`](public/resume.html); the Download/View
   buttons open it (use the browser's *Print → Save as PDF*). To serve a real PDF
   instead, add `public/Abdul_Saboor_CV.pdf` and point `PROFILE.resume` to it.
4. **Social links** — update the `socials` object in `src/data/portfolio.js`.

## 🧱 Tech Stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion 11 · Three.js · @react-three/fiber · @react-three/drei · react-icons

## 📦 Deployment

The app is a static SPA — deploy `dist/` to **Vercel**, **Netlify**, **GitHub Pages**,
or any static host. On Vercel/Netlify, the framework preset is **Vite**; no extra config needed.
