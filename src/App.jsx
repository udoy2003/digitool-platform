import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";


function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Banner />
     
    </>
  );
}

export default App;