import ShopItem from "../ShopItem/ShopItem.jsx";

function Shop() {
  return (
    <main>
      <h1>Store</h1>
      <p>Browse our wide selection of products:</p>
      <ShopItem itemId={1} />
    </main>
  );
}

export default Shop;
