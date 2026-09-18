# ALINEA Research Foundation — Website

Official website for **ALINEA Research Foundation** — an independent applied research foundation based in Indonesia.

> From Inquiry to Impact.

> We start with the problem, not the technology.

## Tech Stack

- Plain HTML, CSS, JavaScript — no frameworks, no build step, no dependencies.
- Sculpted **inline SVG** assets (geometric shapes, patterns, editorial illustrations).
- Minimalist + restrained brutalism design language (see `AGENTS.md`).

## Project Structure

```
├── index.html          # Single-page site (semantic HTML, SEO meta, JSON-LD)
├── AGENTS.md           # Brand / research / design / engineering guidelines
├── CNAME               # Custom domain for GitHub Pages (alineafoundation.id)
├── css/
│   └── styles.css      # Design tokens + layout + brutalist elements
├── js/
│   └── main.js         # Parallax, scroll reveals, mobile nav
└── assets/
    ├── og-image.png        # Social sharing card (1200x630)
    ├── tile-*.svg          # Pattern tiles (dots, hatch, cross, lines)
    └── illustrations/
        ├── hero-study.svg  # Hero editorial illustration
        └── process.svg     # Research process diagram (problem → impact)
```

## Preview Locally

Because assets use relative paths (inline sprite + SVG images), serve the
folder over HTTP rather than opening `index.html` directly from disk:

```sh
python3 -m http.server 8123
# http://localhost:8123
```

## Deployment

Live on **GitHub Pages** at https://alineafoundation.id

Source: branch `main`, served from the repository root.
DNS: `alineafoundation.id` → 4 GitHub Pages A records
(`185.199.108.153` through `185.199.111.153`).

## License

Content copyright © 2026 ALINEA Research Foundation. Keep it that way.