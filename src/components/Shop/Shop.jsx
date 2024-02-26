import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import ShopItem from "../ShopItem/ShopItem.jsx";
import styles from "./Shop.module.css";

function Shop({ totalItems, setTotalItems }) {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function getItems() {
      if (!ignore) {
        try {
          const response = await fetch(
            "https://fakestoreapi.com/products/category/electronics"
          );
          const data = await response.json();
          const extractedItems = data.map((item) => {
            return {
              id: item.id,
              description: item.description,
              image: item.image,
              price: item.price,
              title: item.title,
            };
          });
          setItemsData(extractedItems);
        } catch (error) {
          console.error("Issue fetching data: ", error);
        } finally {
          setLoading(false);
        }
      }
    }
    getItems();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    shopItems = <h2>Loading products...</h2>;
  }

  let shopItems = itemsData.map((item) => (
    <ShopItem
      key={item.id}
      itemData={item}
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
