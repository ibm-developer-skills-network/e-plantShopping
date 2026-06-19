# 🌿 Paradise Nursery — E-Plant Shopping App

A modern, fully responsive React plant shopping application with Redux state management, polished UI, and a smooth shopping cart experience.

**🚀 Live Demo:** [https://KElgenidy.github.io/e-plantShopping/](https://KElgenidy.github.io/e-plantShopping/)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌱 **5 Plant Categories** | Air Purifying, Aromatic, Insect Repellent, Medicinal, Low Maintenance |
| 🛒 **Dynamic Cart** | Real-time add/remove/increment/decrement with live totals |
| 🏷️ **Cart Badge** | Live item count badge on the navbar icon |
| 🎨 **Polished UI** | Smooth hover animations, responsive grid, themed green palette |
| 📱 **Responsive** | Mobile-first layout that adapts to all screen sizes |
| ⚡ **Redux Toolkit** | Centralized global state with `addItem`, `removeItem`, `updateQuantity` |

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **State**: Redux Toolkit + React Redux
- **Build**: Vite 5
- **Package Manager**: Bun
- **Deployment**: GitHub Pages via `gh-pages`

---

## 🚀 Getting Started

### Prerequisites
Install [Bun](https://bun.sh/):
```bash
curl -fsSL https://bun.sh/install | bash
```

### Install & Run
```bash
bun install        # Install dependencies
bun run dev        # Start dev server at http://localhost:5173/e-plantShopping/
```

### Build & Deploy
```bash
bun run build      # Build production bundle
bun run deploy     # Deploy to GitHub Pages
```

---

## 📁 Project Structure

```
src/
├── App.jsx          # Root layout with landing page + product list toggle
├── App.css          # Landing page & container styles
├── ProductList.jsx  # Plant catalog grid with Add-to-Cart logic
├── ProductList.css  # Product card & navbar styles
├── CartItem.jsx     # Cart component with quantity & totals
├── CartItem.css     # Cart component styles
├── CartSlice.jsx    # Redux slice (addItem, removeItem, updateQuantity)
├── store.js         # Redux store configuration
├── AboutUs.jsx      # About section
└── AboutUs.css      # About section styles
```

---

## 🧠 Implementation Notes

- **`addItem`** — adds a new item or increments quantity if already in cart
- **`removeItem`** — deletes item from cart entirely
- **`updateQuantity`** — sets the exact quantity for an item (used by increment/decrement buttons)
- Cart buttons (+ and −) in `CartItem.jsx` dispatch `updateQuantity`, not `addItem`
- The `useEffect` in `ProductList.jsx` syncs Redux cart state with the local `addedToCart` map so buttons stay disabled if an item is removed from cart and re-added
