import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ProductCart from "./components/ProductCart";
import StepSection from "./components/StepSection";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Stats from "./components/Stats";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Banner />
      <Stats />
      <ProductCart setCartCount={setCartCount} />
      <StepSection />
      <Pricing />
      <Workflow />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;