# BrewMath website

Static, dependency-free marketing and support site for the BrewMath iOS app.

## Files

- `index.html` — app introduction, calculator overview, experiment loop, pricing and FAQ.
- `privacy.html` — App Store privacy-policy URL.
- `support.html` — App Store support URL and troubleshooting.
- `data-sources.html` — formulas, official references and limitation disclosures.
- `robots.txt`, `sitemap.xml`, `llms.txt` — crawler discovery files.
- `config.js` — public release state, App Store URL and support contact.
- `_headers` — security and cache headers for hosts that support Netlify/Cloudflare-style header files.

## Before deployment

1. Publish this directory at `https://wbs21.github.io/brewmath/` with HTTPS enabled.
2. Confirm these URLs return HTTP 200:
   - `/`
   - `/privacy.html`
   - `/support.html`
   - `/data-sources.html`
   - `/robots.txt`
   - `/sitemap.xml`
3. Confirm the `13911100061@163.com` mailbox can receive support email.
4. Check the site on iPhone, iPad and desktop.

## App Store release status

BrewMath 1.0 is live on the App Store. The website uses the country-neutral
product link below so Apple can match visitors to their local storefront:

`https://apps.apple.com/app/brewmath-brew-calculator/id6838584763`

App Store Connect URLs:

- Privacy Policy URL: `https://wbs21.github.io/brewmath/privacy.html`
- Support URL: `https://wbs21.github.io/brewmath/support.html`
- Marketing URL: `https://wbs21.github.io/brewmath/`

After changing release information, verify that every `[data-app-store]` link
opens the product page and update `sitemap.xml` plus structured-data dates.

## Google indexing

After the GitHub Pages deployment is live:

1. Create a Google Search Console **URL-prefix property** for `https://wbs21.github.io/brewmath/`.
2. Verify ownership with the HTML verification file or meta tag supplied by Google.
3. Submit `https://wbs21.github.io/brewmath/sitemap.xml`.
4. Use URL Inspection for `/`, `/privacy.html`, `/support.html` and `/data-sources.html`, then request indexing for each.
5. Validate structured data with Google's Rich Results Test.
6. Submit the same sitemap to Bing Webmaster Tools.
7. After the App Store goes live, request a fresh crawl of `/` so the updated download link can be discovered.

Search Console verification does not add analytics or JavaScript tracking to the site.

GitHub project Pages serves this site below `/brewmath/`. A `robots.txt` in that subdirectory is useful documentation, but search engines only treat a host-root `robots.txt` as authoritative. Sitemap submission from Search Console is the primary discovery method for this project URL.

## SEO maintenance

- Keep one canonical URL prefix: `https://wbs21.github.io/brewmath/`.
- Update `lastmod` in `sitemap.xml` only when page content meaningfully changes.
- Keep the App Store title consistent with the `<title>` and structured data.
- Add future feature pages only when they answer a real brewing query; avoid thin duplicate pages.
- Do not add aggregate ratings or review counts to structured data until real public ratings exist.
