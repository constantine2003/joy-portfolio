# 💛 Really Joy Arenas — Personal Portfolio

A personal portfolio website built with **SvelteKit** + **Tailwind CSS**.  
Made with love by Daniel. 🥰

---

## ⚠️ Important — Which Folder to Open

There are **two folders** in this project:

```
joy-portfolio/
├── joyfoliov1.0/   ← OLD version, kept for legacy, do NOT work here
└── joyfolio/       ← ✅ THIS is the real one, always work here
```

Always open and run from **`joyfolio/`**. Ignore `joyfoliov1.0/` — it's just kept as a keepsake of the first version. 😄

---

## 🚀 Running the Project

### You'll need:
- [Node.js](https://nodejs.org/) (version 18 or higher)

### Steps:

```bash
# 1. Open terminal and navigate to the correct folder
cd joyfolio

# 2. Install packages (only needed once)
npm install

# 3. Start the website locally
npm run dev
```

Then open your browser and go to: **http://localhost:5173**

> 💡 Keep the terminal open while working — closing it stops the website.

---

## 📁 Folder Structure

```
joyfolio/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte     ← loads the global CSS
│   │   └── +page.svelte       ← the main page (lists all sections)
│   ├── lib/
│   │   └── components/        ← each section is its own file here
│   │       ├── Navbar.svelte
│   │       ├── Hero.svelte        ← your name, photo, title
│   │       ├── Marquee.svelte     ← scrolling text strip
│   │       ├── About.svelte       ← about me section
│   │       ├── Experience.svelte  ← work & internship experience
│   │       ├── Projects.svelte    ← academic & personal projects
│   │       ├── Education.svelte   ← schools + certs
│   │       ├── Skills.svelte      ← skills + organizations
│   │       └── Contact.svelte     ← contact links + footer
│   ├── app.css                ← global styles and colors
│   └── app.html               ← base HTML template (fonts loaded here)
├── static/
│   └── images/                ← ALL images go here
│       ├── certs/             ← participation certificate images
│       └── ...
├── tailwind.config.js         ← color and font settings
└── package.json
```

---

## ✏️ How to Make Changes

### 🖼 Changing Your Photo
1. Add your photo to `static/images/` — name it `really-joy.jpg`
2. Open `src/lib/components/Hero.svelte`
3. Find the comment that says `PHOTO GOES HERE`
4. Replace the placeholder div with:
```svelte
<img
  src="/images/really-joy.jpg"
  alt="Really Joy Arenas"
  class="relative z-10 w-72 h-96 md:w-80 md:h-[480px] object-cover rounded-3xl border-2 border-ink"
/>
```

---

### 📝 Updating Your About Text
Open `src/lib/components/About.svelte` and edit the paragraphs directly in the HTML section (below `</script>`).

---

### 💼 Adding a New Job / Experience
Open `src/lib/components/Experience.svelte` and find the `experiences` array at the top. Copy one of the existing entries and change the details:

```js
{
  role: 'Your New Job Title',
  company: 'Company Name',
  type: 'Full-time',               // or 'Internship', 'Part-time', etc.
  period: 'Jan 2026 – Present',
  location: 'Cebu, Philippines · On-site',
  bullets: [
    'What you did here.',
    'Another thing you accomplished.',
  ],
  skills: ['Skill 1', 'Skill 2'],
  color: 'bg-joy-400',             // background color of the card
  logo: '/images/company_logo.png', // or null if no logo
},
```

---

### 🎓 Adding a New Certificate
Open `src/lib/components/Education.svelte` and find the school you got the cert from. Add a new entry to its `participationCerts` array:

```js
{ name: 'Your Certificate Name', image: '/images/certs/your-cert.jpg' },
// or if you don't have the image yet:
{ name: 'Your Certificate Name', image: null },
```

Put the certificate image inside `static/images/certs/`.

---

### 🏆 Adding a New Project
Open `src/lib/components/Projects.svelte` and add to the `projects` array:

```js
{
  title: 'Project Title',
  subtitle: 'Short description or course name',
  period: 'Jan 2025 – Mar 2025',
  org: 'University of the Philippines Cebu',
  description: 'What you did and what you learned.',
  skills: ['Skill 1', 'Skill 2'],
  featured: false,   // set to true to make it span full width
  number: '06',      // next number in sequence
  accent: 'bg-white',
},
```

---

### 🔗 Updating Contact Links
Open `src/lib/components/Contact.svelte` and update the `href` values:

```js
{ label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', ... },
{ label: 'Email',    href: 'mailto:your@email.com', ... },
{ label: 'Facebook', href: 'https://facebook.com/your-profile', ... },
```

Also update the email in the big yellow button below.

---

### 🎨 Changing Colors
The yellow color theme is defined in `tailwind.config.js`. The main colors used are:

| Name | What it is |
|---|---|
| `joy-400` | Main yellow (`#ffee58`) |
| `joy-500` | Slightly deeper yellow |
| `ink` | Very dark brown-black (`#1a1200`) |
| `cream` | Off-white background (`#fffdf0`) |

To change the shade of yellow, edit the `joy` color values in `tailwind.config.js`.

---

### 🏫 Adding School / Company Logos
All images go inside `static/images/`. Just drop the file there and reference it like:
```
/images/filename.png
```
No need to write the full path — SvelteKit serves everything in `static/` automatically.

---

## 🌐 Publishing the Website

When you're ready to share it online:

```bash
npm run build
```

This creates a `build/` folder you can upload to:
- **Vercel** (free, recommended) — just connect your GitHub repo
- **Netlify** (free) — drag and drop the `build/` folder
- **GitHub Pages** (free)

---

## 🆘 Common Issues

| Problem | Fix |
|---|---|
| Blank page on `localhost:5173` | Run `npx svelte-kit sync` then `npm run dev` |
| Image not showing | Make sure the file is in `static/images/` and the path starts with `/images/` |
| Changes not showing | Save the file — Vite auto-refreshes. If not, restart with `npm run dev` |
| Red underlines in VS Code | These are often just warnings, not errors. Check the terminal for actual errors |
| Accidentally opened v1.0 | Close it and open `joyfolio/` instead! |

---

*Made with 💛 and math — for the smartest girl I know.*
