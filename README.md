# AromaCanvas — Luxury Fragrance Editorial Shopify Theme

AromaCanvas is a premium, narrative-driven Shopify theme designed specifically for haute parfumerie, luxury editorial fragrance brands, and sensory e-commerce. Moving away from rigid, traditional product grids, AromaCanvas transforms the shopping journey into an immersive visual and emotional experience utilizing Shopify's native Online Store 2.0 architecture.

---

## 💡 Key Architectural Features

* **Olfactory Chronology Engine:** Immersive, scroll-bound section transitions that naturally shift background states, typography focus, and pacing as users journey from Top Notes to Heart and Base Accords.
* **Interactive Fragrance Pyramid:** A semantic, fully accessible CSS component mapping out the anatomy of the perfume’s evolution over time.
* **Fluid Spacing & Fluid Typography:** Custom CSS built on hardware-accelerated tokens and `clamp()` spacing engines to deliver flawless responsive layouts across massive desktop displays and mobile screen factors without template breakage.
* **Vanilla Performance Core:** Zero reliance on bloated external framework dependencies (like jQuery or Tailwind) ensures maximum page-speed efficiency, fast loading times, and direct SEO advantages.

---

## 📂 File Directory Blueprint

The theme layout relies on a highly efficient, minimal footprint designed to comply completely with Shopify OS 2.0 parameters:

```text
AromaCanvas/
├── assets/
│   ├── theme.css                  # Global editorial styles & luxury token definitions
│   └── theme.js                   # Vanilla JS component controllers & intersection engines
├── config/
│   ├── settings_data.json         # Current merchant configuration state settings
│   └── settings_schema.json       # Structural customizer panel schema declarations
├── layout/
│   └── theme.liquid               # Core framework master document shell
├── sections/
│   ├── cinematic-hero.liquid      # Immersive full-viewport introduction block
│   ├── fragrance-pyramid.liquid   # Interactive olfactory structural breakdown matrix
│   └── main-product-narrative.liquid # The main signature scroll experience wrapper
├── snippets/
│   └── scent-indicators.liquid    # Telemetry data visualizers for sillage and projection
└── templates/
    ├── index.json                 # Index layout dynamic system mapping
    └── product.json               # Product layout dynamic narrative structure mapping
