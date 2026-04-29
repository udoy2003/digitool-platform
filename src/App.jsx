import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Workflow from "./components/Workflow";
import StepSection from "./components/StepSection";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Banner />
     <StepSection />
      <Workflow />
      
      <Footer />
     
    </>
  );
}

export default App;