# Lokesh S — Portfolio

A one-page portfolio built with React, Vite, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
```

This outputs static files to `dist/` that you can deploy anywhere (Vercel, Netlify, GitHub Pages, etc.) — no backend needed.

## Editing your content

Everything you'd want to update lives in **one file**:

```
src/data/portfolioData.js
```

- About text, stats, skills list, hackathon timeline entries, experience, contact email, and social links all live here.
- To add/remove a skill, add/remove an entry in `skills: []` and make sure the `icon` name exists in `src/components/icons.js`.
- To add another hackathon or experience entry, add an object to the matching array — the timeline and cards render automatically.

## Social links

`portfolioData.social.instagram` and `.linkedin` are currently **placeholders** (`dfdgfgdgdgdf`, `fdfeg`) — replace them with your real usernames/handles before publishing. They're used to build the profile URLs in `Contact.jsx`.

## Icons

`src/components/icons.js` is the single place icons are registered:
- Python, Pandas, NumPy, MongoDB, and Excel use their real brand logos (via `react-icons/si`).
- Java uses the OpenJDK mark, since Java itself has no standalone Simple Icons logo.
- C and SQL use generic icons (`Cpu`, `Database`) since neither has an official single-brand logo.

## Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── HackathonJourney.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── NodeNetwork.jsx   (decorative hero graphic)
│   ├── Reveal.jsx        (scroll-reveal wrapper + hook)
│   └── icons.js          (icon registry)
├── data/
│   └── portfolioData.js  (all your content — edit this)
├── theme.js               (dark/light color tokens)
├── App.jsx
├── main.jsx
└── index.css
```

## Notes

- Dark mode is the default; the toggle in the navbar switches to light. Theme is not persisted between visits — that would need `localStorage`, which was intentionally left out (only 3 lines to add if you want it: `useState(() => localStorage.getItem('theme') !== 'light')` plus a `useEffect` to save on change).
- Respects `prefers-reduced-motion` for anyone with that OS setting on.
- No backend, no database, no auth — fully static.
