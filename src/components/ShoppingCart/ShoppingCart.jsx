import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

function ShoppingCart({ totalItems }) {
  const [itemsData, setItemsData] = useState({});
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
          const extractedItems = {};
          data.map((item) => {
            extractedItems[item.id] = {
              image: item.image,
              price: item.price,
              title: item.title,
            };
          });
          setItemsData(extractedItems);
          console.log(extractedItems);
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

  const keys = Object.keys(totalItems);
  let items = "Loading cart...";
  let total = 0;

  if (!loading) {
    items = keys.map((key) => {
      return (
        <div key={key}>
          {itemsData[key].title}
          Item #{key}: {totalItems[key]}
        </div>
      );
    });
  }

  return (
    <main>
      <h1>Shopping Cart</h1>
      {items}
      <p>Total: {total}</p>
      <button type="button">Submit Order</button>
    </main>
  );
}

ShoppingCart.propTypes = {
  totalItems: PropTypes.object,
};

export default ShoppingCart;
