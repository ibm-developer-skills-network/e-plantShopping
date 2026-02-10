# Paradise Nursery Shopping App 

Paradise Nursery is a React-based shopping application that allows users to browse a variety of houseplants, add them to a shopping cart, and manage their selected items before checkout.

This project is built as a front-end application using React and Redux Toolkit and is deployed using GitHub Pages.

---

## Live Demo
https://kamyad.github.io/e-plantShopping/

---

## Technologies Used
- React
- Redux Toolkit
- React Router
- JavaScript (ES6+)
- CSS
- GitHub Pages

---

## Application Features

### Landing Page
- Displays the Paradise Nursery brand name
- Background image for visual appeal
- Brief description of the company
- “Get Started” button linking to the product listing page

### Product Listing Page
- Displays houseplants grouped into multiple categories
- Each plant includes:
  - Thumbnail image
  - Name
  - Price
  - Add to Cart button
- Add to Cart button disables after adding an item
- Navigation bar with links to Home, Plants, and Cart
- Shopping cart icon dynamically updates item count

### Shopping Cart Page
- Displays all items added to the cart
- Shows:
  - Plant thumbnail, name, and unit price
  - Quantity controls (increase/decrease)
  - Delete option for each item
- Displays total number of plants and total cost
- Continue Shopping button
- Checkout button displaying “Coming Soon”

---

## State Management
- Redux Toolkit is used to manage cart state
- Cart functionality includes:
  - Adding items
  - Increasing and decreasing quantity
  - Removing items
  - Calculating total quantity and total cost

---

## 📂 Project Structure
