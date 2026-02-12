# ⚖️ LEXOVIA
### Modern Multi-Page Lawyers & Attorneys Website (React + Vite)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production_Ready-1f4f56)

> Premium legal-brand frontend with reusable components, route-based pages, and polished motion effects.

---

## ✨ Highlights

- ⚛️ **React 19 + Vite 7** setup with fast builds
- 🧭 **Multi-page routing** using `react-router-dom`
- 🧩 **Component-based architecture** (clean and scalable)
- 🎯 **Scroll animations** + reveal transitions + parallax feel
- 🖱️ **Custom cursor** for desktop users
- 📈 **Top scroll progress bar**
- 🔢 **Animated case-result counters**
- 📦 **Data-driven content** from one source (`siteData.js`)
- 📱 Fully responsive (desktop, tablet, mobile)

---

## 🔗 Routes

| Page | Route |
|---|---|
| Home | `/` |
| About Us | `/about` |
| Services | `/services` |
| Shop | `/shop` |
| Blog | `/blog` |
| Contact | `/contact` |

---

## 🛠️ Tech Stack

- React
- Vite
- React Router DOM
- ESLint
- Custom CSS (no UI framework)

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

---

## 📁 Project Structure

```text
lexovia/
├── public/
│   ├── images/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── TopBar.jsx
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── ResultsSection.jsx
│   │   ├── TeamSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── CtaSection.jsx
│   │   ├── SiteFooter.jsx
│   │   ├── PageBanner.jsx
│   │   ├── ShopSection.jsx
│   │   ├── BlogSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── RouteScrollTop.jsx
│   │   └── CustomCursor.jsx
│   ├── data/
│   │   └── siteData.js
│   ├── hooks/
│   │   ├── useRevealOnScroll.js
│   │   └── useScrollAnimations.js
│   ├── layout/
│   │   └── SiteLayout.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ShopPage.jsx
│   │   ├── BlogPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## 🧠 Architecture (How It Works)

- `App.jsx` sets up all routes.
- `SiteLayout.jsx` is shared across pages (TopBar, Navbar, Footer, Cursor, Scroll bar).
- `pages/*` compose sections for each route.
- `components/*` keep UI reusable and focused.
- `siteData.js` keeps content centralized for easy updates.
- `hooks/*` manage reveal and scroll-linked animation behavior.

---

## 🎬 Motion & Interactions

- Reveal animation on scroll entry
- Scroll-speed based floating/parallax effect
- Scroll progress indicator on top
- Custom cursor interaction states (hover/press)
- Hover lift/zoom effects on cards and media

---

## 🧩 Key Features by Section

- **Services Page:** starts with 4 cards + `Load More` button
- **Shop Page:** legal resources cards + `Load More`
- **Results Section:** numbers animate from 0 to target values
- **Contact Page:** form opens email via `mailto:` with prefilled body
- **Footer/TopBar:** clickable phone/email/maps links

---

## 🎨 Customization

- Change texts/data: `src/data/siteData.js`
- Replace images: `public/images/`
- Update theme colors/fonts: `src/App.css` (`:root` vars)
- Add new page: create file in `src/pages/` and route in `src/App.jsx`

---

## 📌 Project Notes

- Package name: **`lexovia`**
- Browser title: **`LEXOVIA`**
- Footer copyright: **`Zuraiz`**

---

## 👨‍💻 Author

Crafted as a premium legal website frontend with scalable React architecture.
