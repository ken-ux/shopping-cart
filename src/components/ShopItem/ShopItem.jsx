import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ShopItem.module.css";

function ShopItem({ itemId }) {
  const [itemData, setItemData] = useState({});
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function getItemData() {
      if (!ignore) {
        try {
          const response = await fetch(
            "https://fakestoreapi.com/products/" + itemId
          );
          const data = await response.json();
          const relevantData = {
            description: data.description,
            image: data.image,
            price: data.price,
            title: data.title,
          };
          setItemData(relevantData);
        } catch (error) {
          console.error("Issue fetching data: " + error);
        } finally {
          setLoading(false);
        }
      }
    }
    getItemData();

    return () => {
      ignore = true;
    };
  }, [itemId]);

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{itemData.title}</h2>
      <img className={styles.image} src={itemData.image} alt="" />
      <p>{itemData.description}</p>
      <p>${itemData.price}</p>
      <div className={styles.itemCounter}>
        <button
          type="button"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>

      <button type="button">Add to Cart</button>
    </div>
  );
}

ShopItem.propTypes = {
  itemId: PropTypes.number,
};

export default ShopItem;
