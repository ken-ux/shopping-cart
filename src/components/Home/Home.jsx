import { Link } from "react-router-dom";
import computerImage from "../../assets/computer_parts.jpeg";
import styles from "./Home.module.css";

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <div className={styles.container}>
        <div className={styles.heroText}>
          <p>Looking for PC parts and accessories?</p>
          <Link to="/shop">Shop all our products!</Link>
        </div>
        <img className={styles.image} src={computerImage} alt="" />
      </div>
    </main>
  );
}

export default Home;
