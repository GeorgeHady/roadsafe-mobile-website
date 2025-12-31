# RoadSafe Mobile Tire & Auto - Agent Instructions

## Project Overview

Build a **Next.js 14+ static website** for RoadSafe Mobile Tire & Auto, a mobile tire and auto service company serving Hamilton, Burlington, and surrounding areas in Ontario, Canada.

**Output Mode:** Static Export (`output: 'export'` in next.config.js)

---

## Brand Identity

### Company Name
**RoadSafe Mobile Tire & Auto**

### Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary (Navy Blue) | `#0A1F44` | Headers, footer, primary buttons, text |
| Secondary (Safety Orange) | `#F05A28` | CTAs, highlights, accents, hover states |
| Accent (White) | `#FFFFFF` | Backgrounds, text on dark surfaces |

### Logo Concept
A shield combined with a tire symbol emphasizing safety and reliability. Should convey motion (road) and trustworthiness.

### Typography Recommendations
- **Headings:** Bold, sans-serif (e.g., Inter, Montserrat, or Poppins)
- **Body:** Clean, readable sans-serif (e.g., Inter, Open Sans)

---

## Technical Stack

### Required Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "tailwindcss": "^3.4.0",
  "typescript": "^5.0.0",
  "js-yaml": "^4.1.0",
  "lucide-react": "latest",
  "@types/js-yaml": "^4.0.0",
  "next-pwa": "^5.6.0"
}
```

### Project Structure
```
roadsafe-website/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── gallery/
│   │   └── icons/
│   ├── icons/
│   │   ├── icon-72x72.png
│   │   ├── icon-96x96.png
│   │   ├── icon-128x128.png
│   │   ├── icon-144x144.png
│   │   ├── icon-152x152.png
│   │   ├── icon-192x192.png
│   │   ├── icon-384x384.png
│   │   └── icon-512x512.png
│   ├── manifest.json
│   ├── sw.js
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── reviews/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Container.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTABanner.tsx
│   │   │   └── ServiceArea.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── content.ts
│   │   └── utils.ts
│   ├── data/
│   │   └── content.ts
│   └── styles/
│       └── globals.css
├── content/
│   ├── site-metadata.yaml
│   └── page-content.yaml
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Page Requirements

### 1. Home Page (`/`)
- **Hero Section:** Full-width with background image, main heading, tagline, and prominent CTA button
- **Services Overview:** Grid of 3-4 featured services with icons
- **Why Choose Us:** Benefits section (24/7, Fast Response, Experienced Team, etc.)
- **Testimonials Carousel:** 2-3 featured reviews
- **CTA Banner:** "Need Help Now? Call Us!" with phone number
- **Service Area Map/List:** Areas served

### 2. About Page (`/about`)
- Company story and mission
- Team values section
- Years of experience highlight
- Trust indicators (safety focused, transparent pricing, experienced team)

### 3. Services Page (`/services`)
- Individual service cards with:
  - Service name
  - Description
  - Compliance/safety notes
  - Icon or image
- Each service should be clearly separated

### 4. Gallery Page (`/gallery`)
- Responsive image grid
- Lightbox functionality (optional for static)
- Placeholder images with proper alt text
- Categories: Service Trucks, On-Site Work, Happy Customers

### 5. Reviews Page (`/reviews`)
- Customer testimonials with:
  - Star ratings (5-star display)
  - Customer name and location
  - Review text
- Overall rating summary

### 6. Contact Page (`/contact`)
- Contact information prominently displayed
- Service hours (24/7)
- Service area details
- Contact form (static - will need backend integration later)
- Licensing and compliance disclaimers
- Embedded map placeholder or service area list

---

## Component Guidelines

### Header Component
- Sticky navigation
- Logo on left
- Navigation links centered or right-aligned
- Mobile hamburger menu
- "Call Now" button always visible
- Phone number clickable (tel: link)

### Footer Component
- Company logo and tagline
- Quick links to all pages
- Contact information
- Service areas
- Social media links (placeholders)
- Copyright notice
- Licensing disclaimer

### CTA Buttons
- Primary: Navy Blue background, white text
- Secondary: Safety Orange background, white text
- Hover states with slight darkening
- Phone numbers should use `tel:` links

### Cards
- White background with subtle shadow
- Rounded corners (8-12px)
- Consistent padding
- Hover lift effect for interactive cards

---

## SEO Requirements

### Meta Tags (per page)
```tsx
export const metadata = {
  title: 'Page Title | RoadSafe Mobile Tire & Auto',
  description: 'Page-specific description',
  keywords: ['mobile tire service', 'Hamilton', 'Burlington', 'roadside assistance'],
  openGraph: {
    title: 'Page Title',
    description: 'Description',
    images: ['/images/og-image.jpg'],
  },
}
```

### Structured Data
- LocalBusiness schema
- Service schema for each service
- Review schema for testimonials

---

## Accessibility Requirements

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Alt text for all images
- Focus states on interactive elements

---

## Static Export Configuration

### next.config.js
```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = withPWA(nextConfig)
```

---

## PWA Configuration

### Manifest File (public/manifest.json)
```json
{
  "name": "RoadSafe Mobile Tire & Auto",
  "short_name": "RoadSafe",
  "description": "24/7 Mobile Tire Service - We Come to You",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFFFFF",
  "theme_color": "#0A1F44",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ]
}
```

### PWA Meta Tags (in layout.tsx)
```tsx
<head>
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#0A1F44" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="RoadSafe" />
  <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
</head>
```

### PWA Features
- **Offline Support:** Cache critical pages for offline access
- **Install Prompt:** Users can install the app on their home screen
- **Fast Loading:** Service worker caches assets for instant loads
- **Native Feel:** Standalone display mode without browser UI

---

## Content Source

All page content should be loaded from:
- `content/site-metadata.yaml` - Brand info, colors, structure
- `content/page-content.yaml` - Detailed page content

Create a content loader utility in `src/lib/content.ts` to parse YAML files at build time.

---

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run build  # (with output: 'export', this generates static files)

# Preview production build
npx serve out
```

---

## Image Placeholders

Until real images are provided, use placeholder images:
- Hero: 1920x800 with brand colors overlay
- Services: 400x300 icons/illustrations
- Gallery: 600x400 service photos
- Team: 300x300 headshots

Use services like placeholder.com or create SVG placeholders with brand colors.

---

## Quality Checklist

Before completing each page:
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] All content from YAML files integrated
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Links are functional
- [ ] Images have alt text
- [ ] Colors match brand palette
- [ ] Phone numbers are clickable
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] PWA installable
- [ ] Offline functionality working
- [ ] Service worker registered

---

## Contact Information Reference

- **Phone:** 905-555-1234
- **Email:** info@roadsafemobile.com
- **Location:** Hamilton, ON (Mobile Service)
- **Hours:** 24/7
- **Service Area:** Hamilton, Burlington, and surrounding communities
