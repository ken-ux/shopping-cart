import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cart from "../../assets/cart-variant.svg";
import styles from "./Navigation.module.css";

function Navigation({ totalItems }) {
  let totalCount = 0;
  const keys = Object.keys(totalItems);
  keys.map((key) => {
    totalCount += totalItems[key];
  });

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link className={styles.shoppingCart} to="/shopping-cart">
          <img className={styles.image} src={cart} alt="Shopping Cart" /> ({totalCount})
        </Link>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  totalItems: PropTypes.object,
};

export default Navigation;
