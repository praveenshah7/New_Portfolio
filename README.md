# Praveen Shah — Portfolio

Personal portfolio website built with React JS.

## Tech Stack
- React 18
- Pure CSS (inline styles + CSS variables)
- Deployed on Vercel

## Project Structure
```
src/
  components/
    Cursor.js       — Custom animated cursor
    Navbar.js       — Fixed navigation bar
    Hero.js         — Hero section with particle canvas
    Marquee.js      — Scrolling skills marquee
    About.js        — About me + education
    Skills.js       — Tech stack grid
    Experience.js   — Work history timeline
    Projects.js     — Project cards + certifications
    Contact.js      — Contact links + hire me card
    Footer.js       — Footer
  App.js
  index.js
  index.css
public/
  index.html
```

## Setup & Run Locally

```bash
npm install
npm start
```

## Add Your Photo

1. Place your photo file in `public/` folder as `praveen.jpg`
2. In `Hero.js`, add an `<img>` tag pointing to `/praveen.jpg`

## Add Your Resume

Place `resume.pdf` inside the `public/` folder.
The "Download Resume" button in About section will link to it automatically.

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — Vercel Dashboard (Easiest)
1. Push this project to GitHub
2. Go to vercel.com → New Project
3. Import your GitHub repo
4. Click Deploy — done!

## Customize

- Update contact links in `Contact.js`
- Update project details in `Projects.js`
- Update experience in `Experience.js`
- Colors are defined in `index.css` as CSS variables
