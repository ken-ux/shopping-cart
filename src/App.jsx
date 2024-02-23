import "./App.css";
import { useParams } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./components/Home/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";

function App() {
  const { name } = useParams();

  return (
    <>
      <Navigation />
      {name === "shop" ? (
        <Shop />
      ) : name === "shopping-cart" ? (
        <ShoppingCart />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
