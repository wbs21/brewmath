# BrewMath website

Static, dependency-free marketing and support site for the BrewMath iOS app.

## Files

- `index.html` — app introduction, calculator overview, experiment loop, pricing and FAQ.
- `privacy.html` — App Store privacy-policy URL.
- `support.html` — App Store support URL and troubleshooting.
- `data-sources.html` — formulas, official references and limitation disclosures.
- `robots.txt`, `sitemap.xml`, `llms.txt` — crawler discovery files.
- `config.js` — single place to enable the App Store button after release.
- `_headers` — security and cache headers for hosts that support Netlify/Cloudflare-style header files.

## Before deployment

1. Publish this directory at `https://brewmath.app/` with HTTPS enabled.
2. Confirm these URLs return HTTP 200:
   - `/`
   - `/privacy.html`
   - `/support.html`
   - `/data-sources.html`
   - `/robots.txt`
   - `/sitemap.xml`
3. Set up the `support@brewmath.app` mailbox or forwarding address.
4. Check the site on iPhone, iPad and desktop.

## App Store release day

1. Add the public App Store URL to `appStoreUrl` in `config.js`.
2. Change `released` to `true` in `config.js`.
3. Use the final App Store URL in App Store Connect for:
   - Privacy Policy URL: `https://brewmath.app/privacy.html`
   - Support URL: `https://brewmath.app/support.html`
   - Marketing URL: `https://brewmath.app/`
4. Recheck the App Store title, price and feature list against the website.
5. Deploy again and verify the store buttons open the correct product page.

## Google indexing

After the domain and HTTPS deployment are live:

1. Create a Google Search Console **Domain property** for `brewmath.app`.
2. Verify DNS ownership.
3. Submit `https://brewmath.app/sitemap.xml`.
4. Use URL Inspection for `/`, `/privacy.html`, `/support.html` and `/data-sources.html`, then request indexing for each.
5. Validate structured data with Google's Rich Results Test.
6. Submit the same sitemap to Bing Webmaster Tools.
7. After the App Store goes live, request a fresh crawl of `/` so the updated download link can be discovered.

Search Console verification does not add analytics or JavaScript tracking to the site.

## SEO maintenance

- Keep one canonical hostname: `https://brewmath.app`.
- Update `lastmod` in `sitemap.xml` only when page content meaningfully changes.
- Keep the App Store title consistent with the `<title>` and structured data.
- Add future feature pages only when they answer a real brewing query; avoid thin duplicate pages.
- Do not add aggregate ratings or review counts to structured data until real public ratings exist.
