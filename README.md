# Next.js Website

A modern multi-page website built with React and Next.js.

## Project Structure

```
nextjs-website/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with Navbar and Footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── how-it-works/        # How it Works page
│   ├── features/            # Features page
│   ├── pricing/             # Pricing page
│   ├── contact/             # Contact page
│   ├── signin/              # Sign In page
│   └── signup/              # Sign Up page
├── components/              # Reusable React components
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section component
│   └── ClientLogos.tsx      # Client logos component
├── public/                  # Static assets
├── package.json             # Dependencies
├── next.config.js           # Next.js configuration
└── tsconfig.json            # TypeScript configuration
```

## Features

- **Modern Stack**: Built with React, Next.js 14, and TypeScript
- **Component-Based**: Reusable React components
- **CSS Modules**: Scoped styling for each component
- **App Router**: Next.js App Router for file-based routing
- **Responsive Design**: Mobile-friendly layout
- **Fast Navigation**: Client-side routing with instant page transitions

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd nextjs-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Hero section with company intro and client logos
- **How it Works** (`/how-it-works`) - Explanation of the platform
- **Features** (`/features`) - Feature highlights
- **Pricing** (`/pricing`) - Pricing plans
- **Contact** (`/contact`) - Contact information
- **Sign In** (`/signin`) - User login
- **Sign Up** (`/signup`) - User registration

## Components

### Navbar
Navigation bar with links and auth buttons. Used across all pages via the root layout.

### Footer
Footer component with copyright info. Used across all pages via the root layout.

### Hero
Hero section with heading, description, CTA button, and image. Used on the home page.

### ClientLogos
Displays a row of client company logos. Used on the home page.

## Customization

### Change Company Name
Edit `components/Navbar.tsx` and update the logo text.

### Update Images
Replace the placeholder image URLs in:
- `components/Hero.tsx` - Main hero image
- `components/ClientLogos.tsx` - Client logo images

### Modify Colors
Update the CSS Module files to change colors:
- Primary color: `#4A90E2`
- Dark background: `#2c3e50`
- Text color: `#333`

### Add Content
Edit individual page files in the `app/` directory to add more content.

## Production Build

To create a production build:

```bash
npm run build
npm start
```

The optimized site will be ready for deployment.

## Deployment

This Next.js app can be deployed to:
- Vercel (recommended - zero config)
- Netlify
- AWS
- Any Node.js hosting platform

For Vercel deployment:
1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
