# ptrnformat.org

The source for the [PTRN Working Group](https://ptrnformat.org) website.

PTRN (`.ptrn`) is an open file format for stitched-craft patterns. The specification is in [ptrnformat/spec](https://github.com/ptrnformat/spec).

## How it works

The site is one static page with no build step:

- `site/index.html` and `site/styles.css` are the whole site.
- `site/assets/brand/` and the favicons are copied from [`ptrnformat/community/brand`](https://github.com/ptrnformat/community/tree/main/brand). That repo is the original; update assets there first, then copy them here.
- `site/assets/fonts/` holds Arvo (SIL Open Font License, see `OFL.txt`), self-hosted so the site makes no third-party requests.

Every push to `main` deploys `site/` to GitHub Pages through `.github/workflows/pages.yml`.

## Previewing locally

```sh
cd site && python3 -m http.server 8000
```

Then open http://localhost:8000.
