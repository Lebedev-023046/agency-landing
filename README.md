# Agency Landing

Landing page project on Gulp with local development output in `src/` and production build output in `build/`.

## Setup

Install dependencies:

```bash
npm install
```

## Scripts

Run local development server with watchers:

```bash
npm run dev
```

Create production build in `build/`:

```bash
npm run build
```

Run individual tasks:

```bash
npm run pages
npm run styles
npm run scripts
npm run images
npm run fonts
```

## Project Structure

- `src/pages/`: source HTML pages
- `src/components/`: reusable HTML partials included into pages
- `src/scss/`: SCSS source files
- `src/js/index.js`: main JS source
- `src/assets/img/src/`: original images
- `src/assets/img/dist/`: generated image assets for development/build
- `src/index.html`: generated development HTML
- `src/css/style.min.css`: generated development CSS
- `src/js/index.min.js`: generated development JS
- `build/`: production-ready output

## Editing Rules

Edit only source files:

- `src/pages/*.html`
- `src/components/*.html`
- `src/scss/**/*.scss`
- `src/js/index.js`
- `src/assets/img/src/**/*`

Do not edit generated files manually:

- `src/index.html`
- `src/css/style.min.css`
- `src/js/index.min.js`
- `src/assets/img/dist/**/*`
- `build/**/*`

## HTML Includes

Page assembly uses `gulp-include`.

In HTML pages, use this syntax for partials:

```html
<!--=include header.html -->
```

Partials are resolved from `src/components/`.

## Dev Workflow

`npm run dev` does the following:

- generates images into `src/assets/img/dist/`
- generates `src/index.html` from `src/pages/index.html`
- compiles SCSS into `src/css/style.min.css`
- minifies JS into `src/js/index.min.js`
- starts BrowserSync on top of `src/`

## Build Workflow

`npm run build` copies generated development assets from `src/` into `build/`.

That means production build depends on development artifacts already being generated in `src/`.
