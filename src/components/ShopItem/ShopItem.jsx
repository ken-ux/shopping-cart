import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ShopItem.module.css";

function ShopItem({ itemData, totalItems, setTotalItems }) {
  const [count, setCount] = useState(0);
  const [titleExpanded, setTitleExpanded] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);

  function handleClick() {
    let newTotalItems = { ...totalItems };
    if (!newTotalItems[itemData.id]) {
      newTotalItems[itemData.id] = count;
    } else {
      newTotalItems[itemData.id] = newTotalItems[itemData.id] + count;
    }
    setTotalItems(newTotalItems);
  }

  return (
    <div className={styles.container}>
      <h2
        className={
          titleExpanded ? `${styles.title} ${styles.expanded}` : styles.title
        }
        onClick={() => setTitleExpanded(!titleExpanded)}
      >
        {itemData.title}
      </h2>
      <img className={styles.image} src={itemData.image} alt="" />
      <p
        className={
          descExpanded
            ? `${styles.description} ${styles.expanded}`
            : styles.description
        }
      >
        {itemData.description}
      </p>
      <button
        className={styles.expandButton}
        type="button"
        onClick={() => setDescExpanded(!descExpanded)}
      >
        {descExpanded ? "See less" : "See more"}
      </button>
      <div className={styles.itemDetails}>
        <p className={styles.price}>${itemData.price}</p>
        <div className={styles.itemCounter}>
          <button
            type="button"
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >
            −
          </button>
          <p>{count}</p>
          <button type="button" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
        <button type="button" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ShopItem.propTypes = {
  itemData: PropTypes.object,
  totalItems: PropTypes.object,
  setTotalItems: PropTypes.func,
};

export default ShopItem;
