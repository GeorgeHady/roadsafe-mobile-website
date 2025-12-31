# RoadSafe Mobile Tire & Auto - Website

A Next.js 14+ static website for RoadSafe Mobile Tire & Auto, a mobile tire and auto service company serving Hamilton, Burlington, and surrounding areas in Ontario, Canada.

## Features

- 📱 **PWA Support** - Installable as a mobile app with offline capabilities
- 🎨 **Modern Design** - Clean, professional design with brand colors
- 📊 **SEO Optimized** - Meta tags, structured data, and sitemap
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Static Export** - Fast loading, deployable anywhere
- ♿ **Accessible** - WCAG compliant with semantic HTML

## Tech Stack

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **PWA:** next-pwa

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

1. Run the development server:

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the static site:

```bash
npm run build
```

The static files will be generated in the `out` folder.

### Preview Production Build

```bash
npx serve out
```

## Project Structure

```
├── content/             # YAML content files
├── public/              # Static assets
│   ├── icons/          # PWA icons
│   ├── images/         # Images
│   └── manifest.json   # PWA manifest
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # React components
│   │   ├── forms/      # Form components
│   │   ├── layout/     # Layout components
│   │   ├── sections/   # Page sections
│   │   └── ui/         # UI components
│   ├── lib/            # Utilities and content loader
│   └── styles/         # Global styles
└── ...config files
```

## Pages

- **Home** (`/`) - Hero, services overview, testimonials, CTA
- **About** (`/about`) - Company story, values, experience
- **Services** (`/services`) - All services with compliance notes
- **Gallery** (`/gallery`) - Photo gallery (placeholders)
- **Reviews** (`/reviews`) - Customer testimonials
- **Contact** (`/contact`) - Contact form and information

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Blue | `#0A1F44` | Primary - headers, buttons |
| Safety Orange | `#F05A28` | Secondary - CTAs, accents |
| White | `#FFFFFF` | Backgrounds, text |

## Contact Information

- **Phone:** 905-555-1234
- **Email:** <info@roadsafemobile.com>
- **Hours:** 24/7
- **Service Area:** Hamilton, Burlington, and surrounding communities

## License

Private - All rights reserved.
