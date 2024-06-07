import { useState } from "react";

import Navbar from "./components/Navbar";
// import Navbar2 from "./components/Navbar2";
// import HeadSection from "./components/HeadSection";
// import Homecard from "./components/Homecard";
// import HomeCardSlider from "./components/HomeCardSlider";
import AllRoutes from "./components/AllRoutes";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <AllRoutes>
        <Home />
      </AllRoutes>{" "}
      <Footer />
    </>
  );
}

export default App;
