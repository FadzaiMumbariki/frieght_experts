# United Carriers (React + Vite)

A 1:1 replica of **[United Carriers](https://unitedcarriers.com/)** converted to **React 19 + Vite**, preserving the visual styling, 3D Three.js Globe, GSAP scrub animations, and Barba transitions without modifying design, assets, or layouts.

---

## 🚀 Running the Project

```bash
npm run dev
```

Then visit:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🗺️ Pages & Routing

The homepage is rendered by React. Every other route (`/about`, `/services`, `/insights/...`,
`/product/...`, legal pages, etc.) is a pre-rendered HTML document in `public/` that loads the
shared `/main.js` engine and its page chunk.

`vercel.json` enables `cleanUrls`, so `public/about.html` is served at `/about` and
`public/insights/<slug>.html` at `/insights/<slug>`. `vite.config.js` adds the same rewrite to
`vite` and `vite preview` so local URLs match production. `public/404.html` is served for
unmatched routes.

To add or refresh a page, drop its `.html` file in `public/` under the matching path; no route
table needs updating.

---

## 📁 Architecture & File Layout

```text
cargo/
├── index.html           # Vite HTML entry with <div id="root"> and styles
├── vite.config.js       # Vite configuration with React plugin
├── package.json         # React 19, ReactDOM, Vite dependencies & scripts
├── public/
│   ├── main.js          # Client-side 3D globe & Barba/Lenis controller
│   └── chunks/          # 34 modular ES application chunks
│       ├── Home-*.js    # Homepage animations & preloading
│       ├── globe-*.js   # 3D Three.js Earth globe controller
│       ├── my-flights-* # Three.js flight paths & TopoJSON boundaries
│       └── ...
└── src/
    ├── main.jsx         # React DOM root entrypoint
    ├── App.jsx          # Root React component managing DOM & script lifecycle
    └── content.html     # Raw page markup rendered through React
```
