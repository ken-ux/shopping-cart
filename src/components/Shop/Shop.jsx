import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import ShopItem from "../ShopItem/ShopItem.jsx";
import styles from "./Shop.module.css";

function Shop({ totalItems, setTotalItems }) {
  const [itemIds, setItemIds] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function getItems() {
      if (!ignore) {
        try {
          const response = await fetch(
            "https://fakestoreapi.com/products/category/electronics"
          );
          const data = await response.json();
          const extractedItemIds = data.map((item) => item.id);
          setItemIds(extractedItemIds);
        } catch (error) {
          console.error("Issue fetching data: ", error);
        }
      }
    }
    getItems();

    return () => {
      ignore = true;
    };
  }, []);

  const shopItems = itemIds.map((id) => (
    <ShopItem
      key={id}
      itemId={id}
      totalItems={totalItems}
      setTotalItems={setTotalItems}
    />
  ));

  return (
    <main>
      <h1>Store</h1>
      <p>Browse our wide selection of products:</p>
      <div className={styles.shopItems}>{shopItems}</div>
    </main>
  );
}

Shop.propTypes = {
  totalItems: PropTypes.number,
  setTotalItems: PropTypes.func,
};

export default Shop;
