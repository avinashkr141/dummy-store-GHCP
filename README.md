# Dummy Store (dummy-store-GHCP)

A tiny, static "storefront" demo built with **vanilla HTML/CSS/JavaScript**. It renders a grid of products (name + price) on the page by populating the DOM from a hard-coded list in `src/main.js`.

## Features

- Static storefront layout (`src/index.html`)
- Responsive product grid styled with modern CSS (`src/styles.css`)
- Product list rendered dynamically via JavaScript (`src/main.js`)
- Currency formatting using `Intl.NumberFormat` (USD)

## Project structure

```
dummy-store-GHCP/
└── src/
    ├── index.html   — page markup + script/style includes
    ├── styles.css   — dark theme + grid/card styles
    └── main.js      — demo catalog + DOM rendering logic
```

## Running locally

Because this is a static site, you can open the HTML file directly, or run a simple local server (recommended).

### Option A: Open directly

Open `src/index.html` in your browser.

### Option B: Use a local server (recommended)

Using Python:

```bash
cd src
python3 -m http.server 8000
```

Then visit: `http://localhost:8000`

Using Node (if you have it installed):

```bash
npx serve src
```

## Customizing the catalog

Edit the `items` array in `src/main.js`:

- Change product names
- Update prices
- Add or remove items

## Notes / Limitations

- No backend, database, authentication, checkout, or cart functionality.
- Intended as a UI/DOM manipulation demo (or starter template for a fuller app).

## License

No license has been specified yet. If you plan to share or reuse this project publicly, consider adding a license (e.g., [MIT](https://choosealicense.com/licenses/mit/)).
