# Sudarsan B. — Portfolio

A premium, editorial developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Editing content

Nearly everything on the site is driven by one file:

`src/data/portfolio.js`

Update your name, statement, projects, tech stack, build log entries, certifications, and social links there. Fields left as placeholders (empty strings, `#`, or `your-handle`) are marked in comments — fill those in with real links before deploying:

- `profile.email`, `profile.github`, `profile.linkedin`, `profile.resumeUrl`
- Each project's `github` / `demo` links
- `presence` entries for LeetCode / CodeChef / Codeforces

## Structure

```
src/
  components/   Nav, Footer — shared chrome
  sections/     Hero, About, Work, Stack, BuildLog, CertsAndPresence, Contact
  data/         portfolio.js — all content lives here
```

## Deploying

The build output in `dist/` after `npm run build` is static and can be deployed to Vercel, Netlify, GitHub Pages, or any static host.
