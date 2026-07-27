# 🏗️ Portfolio Build Plan — Step by Step

**Stack**: Astro + Keystatic CMS + Tailwind CSS v4 + Netlify  
**Keystatic Mode**: GitHub Mode (live visual editing)  
**Blog**: Nav link → `blog.yoursite.com` (Hashnode)  
**Estimated Build Time**: 2-3 focused sessions

---

## Phase 1: Foundation (Steps 1-3)

### Step 1: Initialize Astro Project
- Create new Astro project in the workspace
- Set `output: 'hybrid'` for Keystatic API routes
- Install Netlify adapter (`@astrojs/netlify`)
- **Deliverable**: Running Astro dev server at `localhost:4321`

### Step 2: Add Keystatic CMS
- Install `@keystatic/core` + `@keystatic/astro`
- Create `keystatic.config.ts` with content schema
- Mount Keystatic admin UI at `/keystatic`
- **Deliverable**: Visual editor accessible at `localhost:4321/keystatic`

### Step 3: Add Tailwind CSS v4
- Install Tailwind CSS v4 via `@tailwindcss/vite`
- Setup global CSS with `@import "tailwindcss"`
- Configure custom design tokens (colors, fonts, spacing)
- Import Google Fonts (Inter / Outfit for modern look)
- **Deliverable**: Tailwind working across all pages

---

## Phase 2: Content Schema & Pages (Steps 4-6)

### Step 4: Define Keystatic Content Schema
Everything you can edit visually — defined here once:

```
keystatic.config.ts
├── Singletons (one-of-a-kind content):
│   ├── siteSettings    → Site name, tagline, SEO meta, social links
│   ├── heroSection     → Hero title, subtitle, photo, CTAs
│   └── aboutSection    → Bio text, background story, value props
│
├── Collections (multiple entries):
│   ├── projects        → title, description, image, techStack[], liveUrl, githubUrl, featured
│   ├── education       → institution, degree, field, year, logo, description
│   ├── experience      → company, role, period, description, logo, highlights[]
│   ├── skills          → name, icon, category (Frontend/Backend/Tools/etc), proficiency
│   └── courses         → name, platform, year, certificateUrl, logo
```

- **Deliverable**: All content types editable via `/keystatic` UI

### Step 5: Build the 5 Pages

#### Page 1: `index.astro` — Home / Landing + About
```
┌─────────────────────────────────────┐
│  HEADER / NAV                       │
├─────────────────────────────────────┤
│                                     │
│  🖼️ HERO SECTION                   │
│  Name • Title • Tagline             │
│  Professional Photo                 │
│  [View My Work]  [Contact Me]       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  📝 ABOUT SECTION                   │
│  Bio / Story / Value Proposition    │
│  What I do • Why hire me            │
│                                     │
├─────────────────────────────────────┤
│  FOOTER                             │
└─────────────────────────────────────┘
```

#### Page 2: `projects.astro` — Projects Gallery
```
┌─────────────────────────────────────┐
│  HEADER / NAV                       │
├─────────────────────────────────────┤
│                                     │
│  💼 PROJECTS HEADING                │
│                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐     │
│  │ Proj │  │ Proj │  │ Proj │     │
│  │  1   │  │  2   │  │  3   │     │
│  │ img  │  │ img  │  │ img  │     │
│  │ desc │  │ desc │  │ desc │     │
│  │ tech │  │ tech │  │ tech │     │
│  │ link │  │ link │  │ link │     │
│  └──────┘  └──────┘  └──────┘     │
│                                     │
├─────────────────────────────────────┤
│  FOOTER                             │
└─────────────────────────────────────┘
```

#### Page 3: `education.astro` — Education / Skills / Experience
```
┌─────────────────────────────────────┐
│  HEADER / NAV                       │
├─────────────────────────────────────┤
│                                     │
│  🎓 EDUCATION                       │
│  ┌─ 🏫 Institution Logo ──────┐    │
│  │  Degree • Field • Year     │    │
│  └────────────────────────────┘    │
│                                     │
│  🛠️ SKILLS                         │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐      │
│  │ ⚛️ │ │ 🟨 │ │ 🐍 │ │ 🐳 │      │
│  │React│ │ JS │ │ Py │ │Dock│      │
│  └────┘ └────┘ └────┘ └────┘      │
│                                     │
│  📜 COURSES & CERTIFICATIONS       │
│  ├── Course 1 (Platform Logo)       │
│  ├── Course 2 (Platform Logo)       │
│  └── Course 3 (Platform Logo)       │
│                                     │
│  💼 EXPERIENCE TIMELINE            │
│  ┌─ 🏢 Company Logo ──────────┐    │
│  │  Role • Duration            │    │
│  │  Key achievements...        │    │
│  └─────────────────────────────┘    │
│  │                                  │
│  ┌─ 🏢 Company Logo ──────────┐    │
│  │  Role • Duration            │    │
│  │  Key achievements...        │    │
│  └─────────────────────────────┘    │
│                                     │
├─────────────────────────────────────┤
│  FOOTER                             │
└─────────────────────────────────────┘
```

#### Page 4: `blog.astro` — Blog Link
```
┌─────────────────────────────────────┐
│  HEADER / NAV (Blog = external link)│
├─────────────────────────────────────┤
│  Redirects to blog.yoursite.com     │
│  (or nav item links directly)       │
└─────────────────────────────────────┘
```
> Blog will be a nav link pointing to `blog.yoursite.com`. No dedicated page needed — keeps it clean.

#### Page 5: `contact.astro` — Contact
```
┌─────────────────────────────────────┐
│  HEADER / NAV                       │
├─────────────────────────────────────┤
│                                     │
│  📬 GET IN TOUCH                    │
│                                     │
│  ┌─ Contact Form ─────────────┐    │
│  │  Name: [____________]      │    │
│  │  Email: [___________]      │    │
│  │  Message: [_________]      │    │
│  │  [Send Message]            │    │
│  └────────────────────────────┘    │
│                                     │
│  📱 SOCIAL LINKS                    │
│  LinkedIn • GitHub • Twitter • Email│
│                                     │
├─────────────────────────────────────┤
│  FOOTER                             │
└─────────────────────────────────────┘
```

- **Deliverable**: All 5 pages rendering with Keystatic content

### Step 6: Build Reusable Components
- `Header.astro` — Responsive nav with mobile hamburger menu
- `Footer.astro` — Social links, copyright, quick nav
- `Layout.astro` — Base HTML with SEO meta, fonts, global styles
- `ProjectCard.astro` — Project card with image, tech badges, links
- `SkillBadge.astro` — Skill icon + name badge
- `Timeline.astro` — Vertical timeline for experience/education
- `SectionHeading.astro` — Consistent section titles
- **Deliverable**: Clean, reusable component library

---

## Phase 3: Design & Polish (Steps 7-8)

### Step 7: Visual Design & Styling
- **Color palette**: Dark mode with vibrant accent colors (professional + modern)
- **Typography**: Google Fonts (Inter for body, Outfit for headings)
- **Glassmorphism**: Subtle glass effects on cards and nav
- **Gradients**: Smooth gradient backgrounds and accent elements
- **Hover effects**: Scale, glow, and color transitions on interactive elements
- **Micro-animations**: Fade-in on scroll, staggered card reveals
- **Responsive**: Mobile-first design, works beautifully on all devices
- **Deliverable**: Stunning, premium-feeling design

### Step 8: SEO & Performance
- Proper `<title>` and `<meta>` tags on every page (editable via Keystatic!)
- Open Graph / Twitter Card meta tags for social sharing
- `@astrojs/sitemap` for automatic sitemap generation
- Semantic HTML (`<main>`, `<section>`, `<article>`, `<nav>`)
- Image optimization via Astro's `<Image />` component
- **Deliverable**: SEO-optimized, fast-loading site

---

## Phase 4: Deploy & Go Live (Steps 9-10)

### Step 9: Deploy to Netlify
1. Push code to GitHub repository
2. Connect GitHub repo to Netlify
3. Netlify auto-detects Astro → builds & deploys
4. Connect custom domain in Netlify settings
5. SSL auto-provisioned ✅

### Step 10: Setup Live Editing & Blog
1. **GitHub OAuth**: Create GitHub App → add callback URL → set 3 env vars in Netlify
2. **Hashnode Subdomain**: Add CNAME record `blog` → `hashnode.network`
3. **Test**: Login to `yoursite.com/keystatic` → edit content → verify auto-deploy
4. **Deliverable**: 🎉 Fully live site with visual editing!

---

## 📁 Final File Structure (~20 files total)

```
portfolio/
├── public/
│   └── fonts/                    # Local font files (optional)
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── ProjectCard.astro
│   │   ├── SkillBadge.astro
│   │   ├── Timeline.astro
│   │   └── SectionHeading.astro
│   ├── content/                  # ← Keystatic-managed content
│   │   ├── projects/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── skills/
│   │   ├── courses/
│   │   └── site-settings.yaml
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro           # Home + About
│   │   ├── projects.astro        # Projects gallery
│   │   ├── education.astro       # Education / Skills / Experience
│   │   └── contact.astro         # Contact form
│   └── styles/
│       └── global.css            # Tailwind imports + custom styles
├── keystatic.config.ts           # CMS content schema
├── astro.config.mjs              # Astro + Keystatic + Tailwind config
├── package.json
└── netlify.toml                  # Netlify build settings
```

> [!NOTE]
> No separate blog page file — the "Blog" nav item links directly to `blog.yoursite.com` externally.

---

## ✅ Ready to Build?

Once you approve this plan, I'll start with **Phase 1** — setting up the Astro project with Keystatic and Tailwind CSS v4.
