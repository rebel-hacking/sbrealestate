# S B Real Estate — Premium Multipage Residential Rental Website

A high-performance, fully static, production-ready website developed for **S B Real Estate**, a verified residential rental agency located in Jeevan Bima Nagar, Bengaluru, Karnataka, India.

---

## 🌟 Business Overview & Verified Credentials

- **Business Name:** S B Real Estate
- **Business Category:** Real Estate Rental Agency
- **Specialization:** Smooth, requirement-focused home searches across Bengaluru
- **Verified Services:**
  1. Flat Rentals (Apartments)
  2. Home Rentals (Independent Houses)
  3. Rental Agreements (Documentation Coordination)
- **Address:** #12, 2nd Cross Road, Thimmareddy Colony, Jeevan Bima Nagar, Bengaluru, Karnataka 560075, India
- **Phone:** `+91 89512 37776`
- **Google Rating:** `4.9 / 5.0` (157 verified Google reviews)
- **Google Business Profile:** [https://share.google/yo99MyedC7Z9uIwbC](https://share.google/yo99MyedC7Z9uIwbC)
- **Opening Time:** Opens at 8:00 AM (Verified Google Profile timing)

---

## 🎨 Creative Direction: Electric Blue Contemporary Luxury

- **Electric Blue (`#2455E8`):** Primary brand identity, navigation accents, section highlights.
- **Tangerine Orange (`#FF7138`):** Conversion CTAs, WhatsApp buttons, interactive focal points.
- **Midnight Navy (`#15234A`):** Editorial headings, typography, high-contrast dark sections, footer.
- **Pure White (`#FFFFFF`):** Primary background, negative space, modern card layouts.
- **Ice Blue (`#DCE6FF`):** Secondary section backgrounds, badges, and visual depth.
- **Warm Ivory (`#FFF5ED`):** Distinctive editorial backgrounds and warm residential framing.
- **Typography:** *Plus Jakarta Sans* / *Manrope* for confident headlines, *Inter* for interface clarity.

---

## 🗺️ Multipage Static Architecture

Every route is prerendered to its own standalone directory with pre-baked HTML, semantic headings, OpenGraph tags, and Schema.org `RealEstateAgent` JSON-LD:

| Route | Page | File Location | Key Purpose |
|---|---|---|---|
| `/` | **Home** | `dist/index.html` | Hero, discovery, services showcase, customer journey, 4.9★ Google trust, location & final CTA |
| `/about` | **About Us** | `dist/about/index.html` | Requirement-focused philosophy, client feedback, office location, service values |
| `/flat-rentals` | **Flat Rentals** | `dist/flat-rentals/index.html` | Apartment assistance, professionals/families support, FAQs, requirement enquiry |
| `/home-rentals` | **Home Rentals** | `dist/home-rentals/index.html` | Independent houses, privacy & space highlights, FAQs, requirement enquiry |
| `/rental-agreements` | **Rental Agreements** | `dist/rental-agreements/index.html` | Paperwork & documentation coordination, clear non-legal disclaimer, FAQs |
| `/reviews` | **Client Reviews** | `dist/reviews/index.html` | 4.9★ rating metrics, 157 Google reviews, authentic feedback quotes, Google profile link |
| `/contact` | **Contact** | `dist/contact/index.html` | Validated requirement form, pre-filled WhatsApp generator, Google Maps link, office hours |

---

## 🚀 Conversion Channels

1. **WhatsApp (`wa.me/918951237776`):**
   Contextually pre-filled messages customized for general queries, flat rentals, home rentals, and rental agreements.
2. **Click-to-Call Phone (`tel:+918951237776`):**
   Prominently placed in the top bar, navigation, page heroes, and mobile sticky bar.
3. **Requirement Form:**
   Client-side validation of name, 10-digit phone, and rental parameters; automatically compiles a formatted WhatsApp message to connect directly with the agency coordinator.
4. **Mobile Sticky Bar:**
   Compact, fixed bottom action bar on mobile devices (`md:hidden`) with Call Now and WhatsApp actions.

---

## 🛠️ Tech Stack & Static Generation

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom brand tokens
- **Animations:** Framer Motion-compatible transitions & subtle desktop cursor
- **Icons:** Lucide React
- **Build Tool:** Vite 6 with custom SSR Prerenderer (`prerender.js`)
- **SEO:** Automated XML Sitemap (`dist/sitemap.xml`), `robots.txt`, Schema.org `RealEstateAgent` structured data

---

## 💻 Development & Build Commands

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```

### 3. Production Static Build
```bash
npm run build
```
This single command executes:
1. `tsc` (TypeScript type validation)
2. `vite build` (Client production bundle in `dist/`)
3. `vite build --ssr` (Server SSR bundle in `dist-server/`)
4. `node prerender.js` (Prerenders all 7 pages into standalone HTML files, creates `sitemap.xml`, and cleans up)

### 4. Preview Production Build
```bash
npm run preview
```

### 5. Verify Static Output
```bash
node test-dist.js
```

---

## 🌐 Static Deployment Instructions

The `dist/` directory is 100% static and requires **no node server, database, or backend process**. It can be deployed directly to any static web hosting provider:

### Vercel / Netlify
- Set **Build Command:** `npm run build`
- Set **Output Directory:** `dist`

### GitHub Pages
- Deploy the contents of the `dist` folder directly to your `gh-pages` branch.

### Apache / Nginx / S3 + CloudFront
- Copy the entire contents of `dist/` to your web root (`/var/www/html` or S3 bucket).
- Each page folder (e.g. `/about/index.html`, `/flat-rentals/index.html`) serves automatically on deep links without requiring URL rewrite configuration.

---

## ⚙️ Updating Business Details & Imagery

### 1. Updating Verified Business Information
All agency details are centralized in a single file:
`src/data/businessInfo.ts`
- Edit phone numbers, address, rating count, Google profile URL, or opening schedules.
- Re-run `npm run build` to update all pages and structured data automatically.

### 2. Replacing Illustrative Imagery
All architectural and interior photography URLs are configured in:
`src/data/images.ts`
- Replace any image URL with high-resolution photography of verified properties or Bengaluru architecture.
- Re-run `npm run build`.

---

## 🔒 Ethical & Legal Safeguards
- **Zero Fabricated Listings:** The website does not invent fictitious apartments or rent prices.
- **Accurate Review Attribution:** Testimonials use only authentic, supplied Google review quotes.
- **Non-Legal Disclaimer:** The rental agreement section explicitly informs visitors that the agency provides documentation coordination and administrative support, not formal legal counsel.

