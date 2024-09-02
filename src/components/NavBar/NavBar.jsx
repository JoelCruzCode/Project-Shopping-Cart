import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { v4 as uuidv4 } from "uuid";




function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase(),
  );
}


const PRODUCTS_BASE_PATH = "products/";
const linkNames = [
  { name: "new", id: uuidv4() },
  { name: "men", id: uuidv4() },
  { name: "women", id: uuidv4() },
  { name: "electronics", id: uuidv4() },
];

export default function NavBar({ links = linkNames }) {
  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <Link to={`${PRODUCTS_BASE_PATH}${link}`} key={link.id}>
          {toTitleCase(link.name)}
        </Link>
      ))}
    </nav>
  );
}
