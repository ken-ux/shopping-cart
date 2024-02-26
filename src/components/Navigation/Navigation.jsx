import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation({ totalItems }) {
  let totalCount = 0;
  const keys = Object.keys(totalItems);
  for (let i = 0; i < keys.length; i++) {
    totalCount += totalItems[keys[i]];
  }

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link className={styles.shoppingCart} to="/shopping-cart">
          Shopping Cart ({totalCount})
        </Link>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  totalItems: PropTypes.object,
};

export default Navigation;
