# RoadSafe Mobile Tire & Auto - Website Build Tasks

## Overview

Build a Next.js 14+ static website for RoadSafe Mobile Tire & Auto using the content in `/content` folder and instructions in `.github/copilot-instructions.md`.

---

## Phase 1: Project Setup

### Task 1.1: Initialize Next.js Project

```
Create a new Next.js 14+ project with TypeScript and Tailwind CSS.
- Use App Router
- Configure for static export (output: 'export')
- Set up TypeScript strict mode
- Initialize Tailwind CSS with brand colors
```

### Task 1.2: Configure Project

```
Set up project configuration files:
- next.config.js with static export settings
- tailwind.config.ts with brand colors (#0A1F44, #F05A28, #FFFFFF)
- Update globals.css with base styles
- Configure TypeScript paths
```

### Task 1.3: Install Dependencies

```
Install required packages:
- js-yaml and @types/js-yaml for YAML parsing
- lucide-react for icons
- next-pwa for Progressive Web App support
- Any other UI dependencies needed
```

---

## Phase 2: Content System

### Task 2.1: Create Content Loader

```
Build src/lib/content.ts utility to:
- Load and parse YAML files from /content folder
- Export typed content objects for each page
- Handle site metadata and page content separately
```

### Task 2.2: Create Type Definitions

```
Define TypeScript types for:
- Site metadata structure
- Page content structure
- Services list
- Reviews list
- Contact details
```

---

## Phase 3: Layout Components

### Task 3.1: Create Header Component

```
Build src/components/layout/Header.tsx:
- Sticky header with logo placeholder
- Navigation links (Home, About, Services, Gallery, Reviews, Contact)
- Mobile hamburger menu
- "Call Now" CTA button with phone number
- Use brand colors
```

### Task 3.2: Create Footer Component

```
Build src/components/layout/Footer.tsx:
- Logo and tagline
- Navigation quick links
- Contact information
- Service area
- Licensing disclaimers
- Copyright notice
```

### Task 3.3: Create Mobile Menu

```
Build src/components/layout/MobileMenu.tsx:
- Slide-out or overlay mobile navigation
- All navigation links
- Phone number CTA
- Smooth animations
```

### Task 3.4: Create Root Layout

```
Build src/app/layout.tsx:
- HTML structure with metadata
- Header and Footer integration
- Font loading (Inter or similar)
- Global styles
```

---

## Phase 4: UI Components

### Task 4.1: Create Button Component

```
Build src/components/ui/Button.tsx:
- Primary variant (Navy Blue)
- Secondary variant (Safety Orange)
- Outline variant
- Size variants (sm, md, lg)
- Link button support
```

### Task 4.2: Create Card Component

```
Build src/components/ui/Card.tsx:
- White background with shadow
- Rounded corners
- Hover effects
- Header/body/footer sections
```

### Task 4.3: Create Container Component

```
Build src/components/ui/Container.tsx:
- Max-width wrapper
- Responsive padding
- Centered content
```

### Task 4.4: Create Badge Component

```
Build src/components/ui/Badge.tsx:
- For service tags
- Rating badges
- Status indicators
```

---

## Phase 5: Section Components

### Task 5.1: Create Hero Section

```
Build src/components/sections/Hero.tsx:
- Full-width hero with background
- Main heading and subheading
- CTA buttons
- Responsive design
```

### Task 5.2: Create Services Overview Section

```
Build src/components/sections/ServicesOverview.tsx:
- Grid of service cards
- Icons for each service
- Brief descriptions
- Link to full services page
```

### Task 5.3: Create Testimonials Section

```
Build src/components/sections/Testimonials.tsx:
- Featured reviews display
- Star ratings
- Customer name and location
- Carousel or grid layout
```

### Task 5.4: Create CTA Banner Section

```
Build src/components/sections/CTABanner.tsx:
- Full-width colored banner
- Compelling headline
- Phone number CTA
- Safety Orange background
```

### Task 5.5: Create Service Area Section

```
Build src/components/sections/ServiceArea.tsx:
- List of areas served
- Map placeholder or illustration
- "We come to you" messaging
```

---

## Phase 6: Page Development

### Task 6.1: Build Home Page

```
Build src/app/page.tsx:
- Hero section with main tagline
- Services overview grid
- Why Choose Us section
- Featured testimonials
- CTA banner
- Service area section
- SEO metadata
```

### Task 6.2: Build About Page

```
Build src/app/about/page.tsx:
- Company story section
- Mission and values
- Experience highlights (10+ years)
- Trust indicators (licensed, insured)
- Team commitment section
- SEO metadata
```

### Task 6.3: Build Services Page

```
Build src/app/services/page.tsx:
- Introduction text
- Individual service cards:
  - Tire Repair (Puncture Patching)
  - Tire Replacement & Installation
  - Tire Rotation & Balancing
  - Seasonal Tire Changeover
  - Battery Jumpstart & Replacement
- Compliance notes for each service
- CTA to contact
- SEO metadata
```

### Task 6.4: Build Gallery Page

```
Build src/app/gallery/page.tsx:
- Responsive image grid
- Placeholder images with brand colors
- Alt text for all images
- Categories or filtering (optional)
- SEO metadata
```

### Task 6.5: Build Reviews Page

```
Build src/app/reviews/page.tsx:
- All customer testimonials
- Star rating display (5 stars)
- Customer name and location
- Review text
- Overall rating summary
- SEO metadata
```

### Task 6.6: Build Contact Page

```
Build src/app/contact/page.tsx:
- Contact information display
- Phone: 905-555-1234
- Email: info@roadsafemobile.com
- Hours: 24/7
- Service area details
- Contact form (static HTML)
- Licensing disclaimers
- Map placeholder
- SEO metadata
```

---

## Phase 7: Forms

### Task 7.1: Create Contact Form

```
Build src/components/forms/ContactForm.tsx:
- Name field
- Email field
- Phone field
- Service type dropdown
- Message textarea
- Submit button
- Form validation (client-side)
- Success/error states
Note: Form submission will need backend integration later
```

---

## Phase 8: Assets & Images

### Task 8.1: Create Placeholder Images

```
Set up public/images/ structure:
- /hero - Hero background placeholders
- /services - Service icons/images
- /gallery - Gallery placeholders
- /icons - UI icons
Create SVG or use placeholder.com images with brand colors
```

### Task 8.2: Create Favicon and PWA Icons

```
Create favicon.ico and PWA icons:
- favicon.ico
- apple-touch-icon.png
- og-image.jpg for social sharing
- public/icons/icon-72x72.png
- public/icons/icon-96x96.png
- public/icons/icon-128x128.png
- public/icons/icon-144x144.png
- public/icons/icon-152x152.png
- public/icons/icon-192x192.png
- public/icons/icon-384x384.png
- public/icons/icon-512x512.png
All PWA icons should use the shield+tire logo with brand colors
```

---

## Phase 8.5: PWA Configuration

### Task 8.5.1: Create Web App Manifest

```
Create public/manifest.json with:
- App name: "RoadSafe Mobile Tire & Auto"
- Short name: "RoadSafe"
- Description: "24/7 Mobile Tire Service - We Come to You"
- Theme color: #0A1F44 (Navy Blue)
- Background color: #FFFFFF
- Display: standalone
- Icons array with all PWA icon sizes
- Start URL: /
- Orientation: portrait-primary
```

### Task 8.5.2: Configure next-pwa

```
Update next.config.js:
- Import and wrap with next-pwa
- Configure service worker destination
- Disable in development mode
- Enable register and skipWaiting
```

### Task 8.5.3: Add PWA Meta Tags

```
Update src/app/layout.tsx with PWA meta tags:
- Link to manifest.json
- Theme color meta tag
- Apple mobile web app tags
- Apple touch icon link
```

### Task 8.5.4: Configure Offline Caching

```
Set up service worker caching strategy:
- Cache static assets (CSS, JS, images)
- Cache pages for offline access
- Network-first for API calls (if any)
- Stale-while-revalidate for content
```

---

## Phase 9: SEO & Metadata

### Task 9.1: Configure Site Metadata

```
Set up comprehensive metadata in layout.tsx:
- Site title and description
- Open Graph tags
- Twitter cards
- Favicon links
- Canonical URLs
- PWA manifest link
- Theme color
- Apple mobile web app meta tags
```

### Task 9.2: Add Structured Data

```
Add JSON-LD structured data:
- LocalBusiness schema
- Service schema
- Review/Rating schema
```

### Task 9.3: Create robots.txt and sitemap

```
Generate for static export:
- public/robots.txt
- Sitemap generation script or static sitemap.xml
```

---

## Phase 10: Testing & Optimization

### Task 10.1: Responsive Testing

```
Test all pages on:
- Mobile (320px - 480px)
- Tablet (768px - 1024px)
- Desktop (1280px+)
Fix any layout issues
```

### Task 10.2: Accessibility Audit

```
Check and fix:
- Color contrast (WCAG AA)
- Keyboard navigation
- Screen reader compatibility
- Focus states
- Alt text
```

### Task 10.3: Performance Optimization

```
Optimize for Lighthouse:
- Image optimization
- Font loading
- CSS purging
- Minimize JavaScript
Target: 90+ score
```

### Task 10.4: PWA Testing

```
Test PWA functionality:
- Service worker registration
- Manifest validation
- Install prompt appears
- Offline mode works
- Icons display correctly
- Lighthouse PWA audit passes
- Test on mobile devices (Android/iOS)
```

### Task 10.5: Build and Export

```
Run production build:
- npm run build
- Verify /out folder generated
- Verify sw.js (service worker) generated
- Test static files locally with: npx serve out
- Check all links work
- Verify no 404 errors
- Test PWA install on mobile
```

---

## Quick Reference Commands

```bash
# Start development
npm run dev

# Build static site
npm run build

# Preview build locally
npx serve out

# Type checking
npx tsc --noEmit

# Lint
npm run lint
```

---

## File Checklist

### Configuration Files

- [ ] next.config.js (with PWA config)
- [ ] tailwind.config.ts
- [ ] tsconfig.json
- [ ] package.json
- [ ] public/manifest.json

### Layout Components

- [ ] src/components/layout/Header.tsx
- [ ] src/components/layout/Footer.tsx
- [ ] src/components/layout/Navigation.tsx
- [ ] src/components/layout/MobileMenu.tsx

### UI Components

- [ ] src/components/ui/Button.tsx
- [ ] src/components/ui/Card.tsx
- [ ] src/components/ui/Container.tsx
- [ ] src/components/ui/Badge.tsx

### Section Components

- [ ] src/components/sections/Hero.tsx
- [ ] src/components/sections/ServicesOverview.tsx
- [ ] src/components/sections/Testimonials.tsx
- [ ] src/components/sections/CTABanner.tsx
- [ ] src/components/sections/ServiceArea.tsx

### Pages

- [ ] src/app/layout.tsx
- [ ] src/app/page.tsx (Home)
- [ ] src/app/about/page.tsx
- [ ] src/app/services/page.tsx
- [ ] src/app/gallery/page.tsx
- [ ] src/app/reviews/page.tsx
- [ ] src/app/contact/page.tsx

### Utilities

- [ ] src/lib/content.ts
- [ ] src/lib/utils.ts

### Styles

- [ ] src/styles/globals.css

### PWA Assets

- [ ] public/manifest.json
- [ ] public/icons/icon-72x72.png
- [ ] public/icons/icon-96x96.png
- [ ] public/icons/icon-128x128.png
- [ ] public/icons/icon-144x144.png
- [ ] public/icons/icon-152x152.png
- [ ] public/icons/icon-192x192.png
- [ ] public/icons/icon-384x384.png
- [ ] public/icons/icon-512x512.png

---

## Notes

- All content comes from YAML files in `/content` folder
- Phone number: 905-555-1234 (use tel: links)
- Email: <info@roadsafemobile.com> (use mailto: links)
- Service area: Hamilton, Burlington, and surrounding communities
- Hours: 24/7
- Brand emphasizes SAFETY and RELIABILITY
