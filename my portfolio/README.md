# My Portfolio (React + Vite + Tailwind)

A modern personal portfolio website built with React and Vite, styled with Tailwind CSS. It includes a project gallery (with GitHub + live demo links), skills, an about section, and a contact form.

## What’s inside

- **Hero / About / Skills / Projects / Contact** sections
- **Project cards** with live demo + source code buttons
- **Contact form** powered by EmailJS (with a mailto fallback if EmailJS isn’t configured)
- **Responsive layout** and dark-mode friendly styling

## Tech stack

- React
- Vite
- Tailwind CSS
- lucide-react (icons)
- EmailJS (contact form)

## Run locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Contact form (EmailJS)

The contact form reads these environment variables:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If you don’t set these, the form will open your default email app as a fallback (mailto).

## Project structure

- `src/components/` — shared UI components (Navbar, Footer)
- `src/sections/` — page sections (Hero, About, Skills, Projects, Contact)
- `public/assets/` — images used by the site

## Deploy

You can deploy this easily on Vercel/Netlify. If you’re using EmailJS, add the same `VITE_EMAILJS_*` variables in your hosting provider’s environment settings.
