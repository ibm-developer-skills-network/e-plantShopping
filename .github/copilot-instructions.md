# AI Coding Guidelines for Paradise Nursery E-Plant Shopping App

## Architecture Overview
This is a React single-page application built with Vite, featuring a landing page that transitions to a product listing with shopping cart functionality. State management uses Redux Toolkit for cart operations, while local React state handles UI toggles (e.g., showing cart vs. product list).

Key components:
- `App.jsx`: Manages landing page and product list views
- `ProductList.jsx`: Displays plant categories and cards, handles add-to-cart
- `CartItem.jsx`: Renders cart with quantity controls and totals
- `AboutUs.jsx`: Static content on landing page

Data flows from hardcoded plant arrays in `ProductList.jsx` to Redux store via `CartSlice.jsx`.

## Development Workflow
- **Start dev server**: `npm run dev` (Vite dev server)
- **Build for production**: `npm run build` (outputs to `dist/`)
- **Lint code**: `npm run lint` (ESLint with React rules)
- **Preview build**: `npm run preview` (serves built app, includes `--host` for network access)
- **Deploy**: Use `gh-pages` for GitHub Pages deployment (base path: "/shoppingreact")

## Code Patterns
- **Plant data structure**: Nested arrays with categories containing plant objects `{name, image, description, cost}`. Cost stored as string (e.g., "$15") but used numerically in calculations.
- **Cart management**: Use Redux actions `addItem`, `removeItem`, `updateQuantity`. Items include quantity; avoid direct state mutations.
- **UI state**: Local `useState` for view toggles (e.g., `showCart`, `showProductList`). Combine with CSS classes for transitions (e.g., `fade-out`, `visible`).
- **Styling**: Separate CSS files per component. Inline styles for navbar elements. Use className for conditional styling.
- **Event handling**: Prevent default on anchor clicks for SPA navigation (e.g., `handleHomeClick`).
- **Imports**: Group React hooks, then Redux, then components/styles.

## Conventions
- Component naming: PascalCase (e.g., `ProductList`, `CartItem`)
- File structure: Components in `src/`, CSS alongside JSX files
- State updates: Immutable patterns in Redux reducers; use spread for local state
- Error handling: Minimal; focus on user alerts for unimplemented features (e.g., checkout)
- Accessibility: Alt text on images, semantic HTML where possible

## Key Files
- [src/ProductList.jsx](src/ProductList.jsx): Core product display and cart addition logic
- [src/CartSlice.jsx](src/CartSlice.jsx): Redux slice for cart state management
- [src/store.js](src/store.js): Redux store configuration
- [package.json](package.json): Scripts and dependencies (Redux Toolkit, Vite, ESLint)</content>
<parameter name="filePath">/Users/glvela/Coursera/e-plantShopping/.github/copilot-instructions.md