import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./ShoppingCart.module.css";

function ShoppingCart({ totalItems, setTotalItems }) {
  const [itemsData, setItemsData] = useState({});
  const [loading, setLoading] = useState(true);
  const keys = Object.keys(totalItems);

  function handleRemoveItem(id) {
    let newTotalItems = { ...totalItems };
    delete newTotalItems[id];
    setTotalItems(newTotalItems);
  }

  useEffect(() => {
    let ignore = false;

    // End loading state early if cart is empty
    if (keys.length === 0) {
      ignore = true;
      setLoading(false);
    }

    async function getItems() {
      if (!ignore) {
        try {
          const response = await fetch(
            "https://fakestoreapi.com/products/category/electronics"
          );
          const data = await response.json();
          const extractedItems = {};
          data.map((item) => {
            extractedItems[item.id] = {
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
  }, [keys]);

  let items = "Loading cart...";
  let total = 0;

  if (!loading) {
    if (keys.length === 0) {
      items = "No items in your cart.";
    } else {
      items = keys.map((key) => {
        total += itemsData[key].price * totalItems[key];
        return (
          <div className={styles.item} key={key}>
            <img className={styles.image} src={itemsData[key].image} alt="" />
            <div>
              <p className={styles.title}>{itemsData[key].title}</p>
              <p>Quantity: {totalItems[key]}</p>
              <p>
                Price: ${itemsData[key].price} x {totalItems[key]}
              </p>
              <button type="button" onClick={() => handleRemoveItem(key)}>
                Remove from Cart
              </button>
            </div>
          </div>
        );
      });
    }
  }

  return (
    <main>
      <h1>Shopping Cart</h1>
      <div className={styles.container}>{items}</div>
      <p>Total: ${total}</p>
      <button
        type="button"
        onClick={() => {
          alert("Order submitted!");
          setTotalItems({});
        }}
      >
        Submit Order
      </button>
    </main>
  );
}

ShoppingCart.propTypes = {
  totalItems: PropTypes.object,
  setTotalItems: PropTypes.func,
};

export default ShoppingCart;
