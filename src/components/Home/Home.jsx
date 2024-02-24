import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>Welcome to the Store.</p>
      <Link to="/shop">Shop all our products!</Link>
    </main>
  );
}

export default Home;
