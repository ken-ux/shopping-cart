import "./App.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./components/Home/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";

function App() {
  const { name } = useParams();
  const [totalItems, setTotalItems] = useState({});

  return (
    <>
      <Navigation totalItems={totalItems} />
      {name === "shop" ? (
        <Shop totalItems={totalItems} setTotalItems={setTotalItems} />
      ) : name === "shopping-cart" ? (
        <ShoppingCart />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
