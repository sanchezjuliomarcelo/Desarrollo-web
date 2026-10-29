# Flor Miro — Portfolio & Recetas

Sitio de **Florencia Miro**, Chef Pâtissier & Chocolatier (Buenos Aires).
Portfolio de creaciones, historia y recetas paso a paso.

## Stack
- [Astro](https://astro.build) (sitio estático)
- Optimización de imágenes con `sharp` (webp responsive)
- Deploy automático en **Netlify** al pushear a `main`

## Desarrollo local
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # previsualiza el build
```

## Estructura
- `src/pages/` — páginas (inicio, creaciones, sobre-flor, recetas, contacto)
- `src/data/` — contenido: `site.js`, `creations.js`, `recipes.js` (+ `recetas.json`)
- `src/assets/` — imágenes optimizadas por Astro
- `src/components/` — Gallery (con lightbox), íconos
- `netlify.toml` — configuración de build/deploy

## Cómo editar el contenido
- **Fotos de creaciones:** agregá la imagen en `src/assets/gallery/` e importала en `src/data/creations.js`.
- **Recetas:** los ingredientes y pasos viven en `src/data/recetas.json`; los textos de intro y categorías en `src/data/recipes.js`.
- **Contacto / redes:** todo en `src/data/site.js`.
