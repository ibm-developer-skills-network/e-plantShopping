# Paradise Nursery – E-Commerce Web Application

Paradise Nursery is a responsive, feature-rich React e-commerce application designed for plant enthusiasts. The platform allows users to browse an array of categorized plants (Air Purifying, Aromatic, Insect Repellent, Medicinal, and Low Maintenance), dynamically add items to a shopping cart, adjust item quantities seamlessly, and view accurate real-time price calculations.

## Live Demo
You can view the live deployment here: [Paradise Nursery Live on GitHub Pages](https://kerenmocke.github.io/e-plantShopping/)

---

## Tech Stack & Key Concepts Architecture

- **Frontend Core:** React (Functional Components, Hooks)
- **Global State Management:** Redux Toolkit & React-Redux
- **Styling:** CSS3 (Component-specific style layers & Responsive UI grids)
- **Build Tool & Bundler:** Vite
- **Deployment:** GitHub Pages

### Architecture & Concepts Implemented:
* **Component Composition & Nesting:** Built modular, reusable building blocks (`ProductList`, `CartItem`, `AboutUs`) nested inside a root controlled view layer (`App.jsx`).
* **React State Hooks:** Utilized `useState` for local interactive layout transitions, tracking specific structural view changes without polluting global memory.
* **Redux Architecture Layer:** Centralized global states into a dedicated store slice (`CartSlice.js`). Integrated pure reducer state mutations (`addItem`, `removeItem`, `updateQuantity`) triggered using global `useDispatch` and live-selected via `useSelector`.
* **Dynamic Data Rendering:** Implemented clean multidimensional JavaScript array mapping (`.map()`) optimized with uniquely tracked item keys to dynamically project categories and product cards on the fly.
* **Event Interactivity Handling:** Handled complex UI micro-interactions, such as conditionally disabling "Add to Cart" buttons based on live store data metrics.

---

## Features

- **Immersive Landing Page:** Clean introductory screen with a call-to-action "Get Started" button and integrated company description.
- **Dynamic Product Grid View:** Grouped plant categories with detailed product cards containing names, description highlights, exact pricing, and image metrics.
- **Advanced State-Synced Shopping Cart:**
  - Real-time navigation view-switching (Plants / About Us / Cart) without explicit page refreshes.
  - Interactive item counters showing total item quantities instantly in the navigation badge.
  - Granular cart controls to increase, decrease, or completely delete items, automatically recalculating subtotals and global expenditure figures.

---

## Project structure

e-plantShopping/
├── src/
│   ├── components/         # Modular user interface views
│   │   ├── AboutUs.jsx     # Team profile overview layout
│   │   ├── CartItem.jsx    # Checkout calculation lists sheet
│   │   └── ProductList.jsx # Main shop selection layout & navigation base
│   ├── store/
│   │   ├── CartSlice.js    # Redux actions and mutations slice rules
│   │   └── store.js        # Global bootstrapping Redux store
│   ├── App.jsx             # Top-level application controller
│   └── main.jsx            # Entry module delivering global Redux Provider context
├── vite.config.js          # Deployment base sub-directory mapping
└── package.json            # Target version dependency records

---

## Installation & Local Setup

To clone and run this application locally on your computer, follow these quick steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/kerenmocke/e-plantShopping.git](https://github.com/kerenmocke/e-plantShopping.git)
