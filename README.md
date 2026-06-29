# Onur Altay Topaloğlu — Personal Website

A fast, dark-themed personal site built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**.

## Run locally

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Editing content

Almost all text lives in one file: **`lib/data.ts`**. Edit it to update your bio,
publications, experience, projects, skills, and links — no need to touch the components.

### Things to fill in (search for `TODO` in `lib/data.ts`)

- **Social links** — replace the placeholder GitHub, LinkedIn, and Google Scholar URLs.
- **Publication links** — the LuMon `Paper / Project Page / GitHub / Hugging Face` URLs are set to `#`.
- **Capture & Cook website** — its link is set to `#`.
- **Second project** — a commented template is ready in the `projects` array; uncomment and fill it.

### CV

The downloadable résumé is `public/Onur-Altay-Topaloglu-CV.pdf`. Replace that file to update it.

## Structure

```
app/
  layout.tsx      # fonts, metadata, <html>
  page.tsx        # assembles the sections
  globals.css     # theme tokens (colors, fonts), animations
  icon.svg        # favicon
components/        # Nav, Hero, About, Research, Experience, Projects, Contact, Footer
lib/data.ts       # ← all site content
```

## Deploy

Works out of the box on **Vercel** (recommended for Next.js): push to GitHub and import the repo.
Once you buy a `.dev` domain, add it in the Vercel project settings.
