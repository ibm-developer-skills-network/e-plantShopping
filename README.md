# 🌿 Paradise Nursery - React Redux Project

## 🛒 Features

* Browse plants by categories (Air Purifying, Medicinal, Aromatic, etc.)
* Add plants to cart
* Increase / decrease quantity
* Remove items from cart
* View total cart amount
* Continue shopping from cart

---

## ⚙️ Tech Stack

* React (Functional Components + Hooks)
* Redux Toolkit (State Management)
* CSS (Custom styling)

---

## 🧠 Cart Functionality (Redux Logic)

* `addItem` → Adds item to cart or increases quantity if already exists
* `removeItem` → Removes item completely from cart
* `updateQuantity` → Increment / decrement item quantity

---

## 🚨 Important Notes

* Prices are stored as strings (e.g., `$15`)
  → Converted using:

  ```js
  Number(item.cost.replace('$', ''))
  ```

* "Continue Shopping" works by toggling UI state:

  ```js
  setShowCart(false);
  ```

---

## 🐞 Common Issues & Fixes

### ❌ Error: Cannot read properties of undefined (preventDefault)

**Fix:**
Do not use `event.preventDefault()` in button handlers unless necessary.

```js
const handleContinueShopping = () => {
  onContinueShopping();
};
```

---

### ❌ Add to Cart not working

**Fix:** Ensure Redux `dispatch(addItem())` is properly used.

---

## 🚀 Future Improvements

* Add cart item count badge 🛍️
* Persist cart using localStorage 💾
* Add checkout flow 💳
* Add search & filter 🔍

---

## 📌 Author Notes

This project demonstrates a basic e-commerce flow using React and Redux, focusing on clean state management and component interaction.

---
