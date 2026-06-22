# Mohamed Alaa Elden — Portfolio (Next.js)

Personal portfolio built with **Next.js 14 (App Router)**.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.js       -> Root layout, fonts, metadata
  page.js          -> Main page (assembles all sections)
  globals.css      -> Global styles (theme variables, layout, components)
components/
  Navbar.js        -> Nav bar with theme toggle, WhatsApp & CV download
  Hero.js          -> Hero section with photo and CTAs
  Skills.js        -> Core competencies section
  Experience.js    -> Professional experience timeline
  Projects.js      -> Filterable project grid
  ProjectCard.js   -> Single project card with live screenshot
  Contact.js       -> Contact section
  Footer.js        -> Footer
  WhatsAppIcon.js  -> Reusable WhatsApp SVG icon
data/
  portfolio.js     -> All content data (skills, experience, projects)
public/
  profile.jpg               -> Profile photo
  Mohamed_Alaa_Elden_CV.pdf  -> Downloadable CV
```

## Deploy

The easiest way to deploy is with [Vercel](https://vercel.com/new).
