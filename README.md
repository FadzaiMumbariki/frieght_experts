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
