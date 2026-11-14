import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROUTES = [
  {
    path: '/',
    folder: '',
    title: 'S B Real Estate — Residential Rental Agency in Bengaluru',
    description: 'Reliable residential rental agency specializing in smooth, requirement-focused home searches in Jeevan Bima Nagar and Bengaluru. 4.9★ Google rating.',
    canonical: 'https://sbrealestate.in/',
    keywords: 'real estate rental agency Bengaluru, rental agency Jeevan Bima Nagar, flat rentals Bangalore, house for rent Jeevan Bima Nagar, S B Real Estate Bengaluru',
    priority: '1.0'
  },
  {
    path: '/about',
    folder: 'about',
    title: 'About S B Real Estate — Trusted Rental Agency in Bengaluru',
    description: 'Discover S B Real Estate: our requirement-focused approach, commitment to reliable residential renting, and 4.9-star customer trust in Bengaluru.',
    canonical: 'https://sbrealestate.in/about',
    keywords: 'about S B Real Estate, rental property specialist Bengaluru, real estate broker Jeevan Bima Nagar, reliable house rental agent',
    priority: '0.8'
  },
  {
    path: '/flat-rentals',
    folder: 'flat-rentals',
    title: 'Flat Rentals in Bengaluru — S B Real Estate',
    description: 'Requirement-focused flat rental assistance in Jeevan Bima Nagar and nearby Bengaluru areas. Tailored for professionals and families. Enquire today.',
    canonical: 'https://sbrealestate.in/flat-rentals',
    keywords: 'flat rentals Jeevan Bima Nagar, apartments for rent Bengaluru, 1BHK 2BHK 3BHK flats Bangalore, executive flat rental Bengaluru',
    priority: '0.9'
  },
  {
    path: '/home-rentals',
    folder: 'home-rentals',
    title: 'Home Rentals in Bengaluru — S B Real Estate',
    description: 'Independent home and house rental guidance in Bengaluru. Thoughtful matching based on location, budget, and family preferences. Contact S B Real Estate.',
    canonical: 'https://sbrealestate.in/home-rentals',
    keywords: 'home rentals Bengaluru, independent house for rent Bangalore, residential house rent Jeevan Bima Nagar, family homes rent Bengaluru',
    priority: '0.9'
  },
  {
    path: '/rental-agreements',
    folder: 'rental-agreements',
    title: 'Rental Agreement Assistance in Bengaluru — S B Real Estate',
    description: 'Straightforward rental agreement assistance and coordination in Bengaluru. Clear paperwork guidance for landlords and tenants.',
    canonical: 'https://sbrealestate.in/rental-agreements',
    keywords: 'rental agreement assistance Bengaluru, house rental agreement Bangalore, tenant agreement Jeevan Bima Nagar, lease agreement paperwork help',
    priority: '0.8'
  },
  {
    path: '/reviews',
    folder: 'reviews',
    title: 'Client Reviews & Ratings (4.9★) — S B Real Estate',
    description: 'Read authentic Google reviews and feedback for S B Real Estate. Rated 4.9/5 from 157 Google reviews for reliable, efficient rental assistance.',
    canonical: 'https://sbrealestate.in/reviews',
    keywords: 'S B Real Estate reviews, Google reviews S B Real Estate, best rental broker Bengaluru review, Jeevan Bima Nagar real estate feedback',
    priority: '0.8'
  },
  {
    path: '/contact',
    folder: 'contact',
    title: 'Contact S B Real Estate — Jeevan Bima Nagar, Bengaluru',
    description: 'Connect with S B Real Estate via WhatsApp, phone, or requirement form. Located at Thimmareddy Colony, Jeevan Bima Nagar, Bengaluru.',
    canonical: 'https://sbrealestate.in/contact',
    keywords: 'contact S B Real Estate, S B Real Estate phone number, S B Real Estate address Jeevan Bima Nagar, rental enquiry Bengaluru',
    priority: '0.9'
  }
];

async function prerender() {
  const distDir = path.resolve(__dirname, 'dist');
  const serverDir = path.resolve(__dirname, 'dist-server');
  const templatePath = path.resolve(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('Template not found at', templatePath);
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  // Load SSR bundle
  let renderFn = null;
  const serverBundlePath = path.resolve(serverDir, 'entry-server.js');
  if (fs.existsSync(serverBundlePath)) {
    try {
      const serverModule = await import(pathToFileURL(serverBundlePath).href);
      renderFn = serverModule.render;
      console.log('✓ Loaded SSR server bundle successfully');
    } catch (err) {
      console.warn('Could not load SSR bundle, falling back to static metadata templating:', err.message);
    }
  }

  for (const route of ROUTES) {
    let appHtml = '';
    if (renderFn) {
      try {
        const rendered = renderFn(route.path);
        appHtml = rendered.html;
      } catch (e) {
        console.warn(`Render error on route ${route.path}:`, e.message);
      }
    }

    // Build Schema.org structured data for this page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "@id": "https://sbrealestate.in/#agency",
      "name": "S B Real Estate",
      "description": "Reliable real estate rental agency specializing in smooth, requirement-focused home searches.",
      "telephone": "+918951237776",
      "url": "https://sbrealestate.in",
      "sameAs": ["https://share.google/yo99MyedC7Z9uIwbC"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "#12, 2nd Cross Road, Thimmareddy Colony",
        "addressLocality": "Jeevan Bima Nagar, Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560075",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "opens": "08:00",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "reviewCount": "157"
      }
    };

    let html = template;

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

    // Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // Inject Head tags before </head>
    const extraHeadTags = `
    <link rel="canonical" href="${route.canonical}" />
    <meta name="keywords" content="${route.keywords}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${route.canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="S B Real Estate" />
    <meta property="og:image" content="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" />
    <script type="application/ld+json" id="structured-data-business">
      ${JSON.stringify(structuredData, null, 2)}
    </script>
    `;

    html = html.replace('</head>', `${extraHeadTags}\n</head>`);

    // Inject pre-rendered HTML into #root if available
    if (appHtml) {
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    }

    // Determine target output directory
    const targetDir = route.folder ? path.resolve(distDir, route.folder) : distDir;
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const outputPath = path.resolve(targetDir, 'index.html');
    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`✓ Prerendered: ${route.path} -> ${outputPath}`);
  }

  // Generate XML Sitemap
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${r.canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r.priority}</priority>
  </url>`
).join('\n')}
</urlset>`;

  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log('✓ Generated sitemap.xml');

  // Clean up server build directory if exists
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
    console.log('✓ Cleaned up temporary server bundle');
  }

  console.log('\n✨ Fully static multipage build completed successfully!');
}

prerender();

