# e-plantShopping

## Paradise Nursery — Application de panier d'achat

Application React de boutique en ligne de plantes d'intérieur. Ce projet a été réalisé
dans le cadre du projet final du cours IBM Skills Network : **Application de Shopping
Paradise Nursery**.

Le dépôt est nommé **e-plantShopping** conformément aux consignes du projet.

---

## 🌿 Aperçu

**Paradise Nursery** est une boutique de plantes d'intérieur qui propose plusieurs
catégories de plantes (plantes purifiant l'air, plantes aromatiques, plantes
repoussant les insectes, plantes médicinales, plantes à faible entretien).

L'utilisateur peut :
- Naviguer sur la page d'accueil présentant l'entreprise
- Cliquer sur **Get Started** pour accéder à la liste des plantes
- Ajouter n'importe quelle plante à son panier
- Consulter son panier, ajuster les quantités, supprimer des articles
- Revenir à la liste des plantes à tout moment

---

## 🚀 Fonctionnalités

- **Page d'accueil** avec image de fond, message de bienvenue et bouton *Get Started*
- **Barre de navigation** avec compteur dynamique du nombre d'articles du panier
- **Liste de produits** regroupés en catégories, avec image, nom, description et prix
- **Bouton Add to Cart** qui se désactive après ajout et affiche *Ajouté au panier*
- **Panier** avec :
  - Calcul du montant total
  - Sous-total par plante (prix × quantité)
  - Boutons **+ / −** pour ajuster la quantité
  - Bouton **Delete** pour retirer un article
  - Bouton **Continue Shopping** pour retourner à la liste
  - Bouton **Checkout** (message "Coming Soon")

---

## 🛠️ Technologies utilisées

- **React 18** (composants fonctionnels + hooks `useState`, `useEffect`)
- **Redux Toolkit** (`createSlice`, `configureStore`) pour la gestion globale de l'état
- **react-redux** (`Provider`, `useSelector`, `useDispatch`)
- **Vite** comme bundler et serveur de développement
- **CSS3** pour la mise en page et le responsive

---

## 📁 Structure du projet
