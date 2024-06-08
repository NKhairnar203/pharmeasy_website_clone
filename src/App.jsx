import { useState } from "react";

import Navbar from "./components/Navbar";
// import Navbar2 from "./components/Navbar2";
// import HeadSection from "./components/HeadSection";
// import Homecard from "./components/Homecard";
// import HomeCardSlider from "./components/HomeCardSlider";
import AllRoutes from "./components/AllRoutes";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const product = {
    
      "id": 6,
      "image": "https://cdn01.pharmeasy.in/dam/products_otc/D00815/zandu-balm-50ml-with-free-zandu-ortho-vedic-oil-worth-30rs-1-1701673063.jpg?dim=700x0&dpr=1&q=100",
      "name": "Zandu Balm 50ml With Free Zandu Ortho Vedic Oil Worth 30rs",
      "price": 175,
      "discount_price": 0,
      "percentage": 0
    }
  
  return (
    <>
 
      <Navbar />
      <AllRoutes>
        <Home />
        <ProductDetail />
      </AllRoutes>
      <Footer />
    </>
  );
}

export default App;
