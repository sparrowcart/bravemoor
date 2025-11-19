import Head from "next/head";

export default function MetaTags() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Brave Moor — We’re Building Brands That Matter</title>
      <meta
        name="title"
        content="Brave Moor — We’re Building Brands That Matter"
      />
      <meta
        name="description"
        content="Brave Moor is a modern digital marketing agency helping brands grow through strategy, creativity, and performance. Discover how we build brands that matter."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.bravemoor.com/" />
      <meta
        property="og:title"
        content="Brave Moor — We’re Building Brands That Matter"
      />
      <meta
        property="og:description"
        content="Explore Brave Moor — a creative marketing agency focused on human-centered strategy, design, and performance-driven growth."
      />
      <meta
        property="og:image"
        content="https://www.bravemoor.com/assets/img/meta/bravemoor-preview.jpg"
      />

      {/* X (Twitter) Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.bravemoor.com/" />
      <meta
        name="twitter:title"
        content="Brave Moor — We’re Building Brands That Matter"
      />
      <meta
        name="twitter:description"
        content="Modern marketing agency empowering brands through creativity and smart digital strategy."
      />
      <meta
        name="twitter:image"
        content="https://www.bravemoor.com/assets/img/meta/bravemoor-preview.png"
      />

      {/* LinkedIn / Pinterest use same OG tags */}
      <meta property="og:site_name" content="Brave Moor" />

      {/* Favicon + Theme */}
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#ff5c35" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Brave Moor",
            url: "https://www.bravemoor.com",
            logo: "https://www.bravemoor.com/assets/img/logo/bravemoor-logo.png",
            sameAs: [
              "https://www.facebook.com/bravemoor",
              "https://www.instagram.com/bravemoor",
              "https://www.linkedin.com/company/bravemoor",
            ],
            description:
              "Brave Moor is a digital marketing agency that helps businesses grow through creative strategy, design, and technology.",
          }),
        }}
      />
    </Head>
  );
}
