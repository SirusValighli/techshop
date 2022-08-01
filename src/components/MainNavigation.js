import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>TechShop</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Mobiles </Link>
          </li>
          <li>
            <Link to="/New">Add New Mobile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
