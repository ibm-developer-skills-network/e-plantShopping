# e-Plant Shopping

An e-commerce React app for browsing and shopping decorative plants. The project opens with a landing page for Paradise Nursery, then moves into a product experience that organizes plants by category and includes a cart flow backed by Redux.

## Features

- Landing page with a hero section and About Us area
- Plant catalog grouped into categories such as air purifying, fragrant, insect repellent, medicinal, and low maintenance plants
- Cart view with navigation between home, product list, and cart
- Redux store setup for cart state management
- Built with Vite for fast local development and production builds

## Tech Stack

- React 18
- Vite
- Redux Toolkit
- React Redux
- Plain CSS modules/files for styling

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Project Structure

```text
src/
	App.jsx            Main landing page and navigation flow
	ProductList.jsx    Product catalog and cart entry point
	CartSlice.jsx      Redux slice for cart state
	store.js           Redux store configuration
	AboutUs.jsx        About Us content
	CartItem.jsx       Cart UI
	*.css              Component and global styling
```

## Notes

- The app is centered around the Paradise Nursery storefront experience.
- Product data is currently defined in `ProductList.jsx`.
- The Redux cart store is already wired into the app through `src/store.js` and `src/main.jsx`.

## License

This project is distributed under the MIT License. See [LICENSE](LICENSE) for details.
