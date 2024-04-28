// import React, { useState } from 'react';
// import ProductList from './ProductList';
// import './App.css';

// function App() {
//   const [showProductList, setShowProductList] = useState(false);

//   const handleGetStartedClick = () => {
//     setShowProductList(true);
//   };

//   return (
//     <>
//       {!showProductList && (
//         <div className="landing-page">
//           <div className="background-image"></div>
//           <div className="content">
//             <h1>Welcome to Paradise Nursery</h1>
//             <div className="divider"></div>
//             <p>Where Green Meets Serenity and Peace</p>
//             <button className="get-started-button" onClick={handleGetStartedClick}>
//               Get Started
//             </button>
//           </div>
//         </div>
//       )}
//       {showProductList && <ProductList />}
//     </>
//   );
// }

// export default App;


import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;



