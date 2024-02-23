import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link className={styles.shoppingCart} to="/shopping-cart">
          Shopping Cart
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
