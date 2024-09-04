import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import { v4 as uuidv4 } from "uuid";
import { toTitleCase } from "../../utility";

const PRODUCTS_BASE_PATH = "/products/";
const linkNames = [
  { name: "men", id: uuidv4() },
  { name: "women", id: uuidv4() },
  { name: "electronics", id: uuidv4() },
  { name: "jewelry", id: uuidv4() },
];

export default function NavBar({ links = linkNames }) {
  return (
    <nav className={classes.nav}>
      {links.map((link) => (
        <Link to={`${PRODUCTS_BASE_PATH}${link.name}`} key={link.id}>
          {toTitleCase(link.name)}
        </Link>
      ))}
    </nav>
  );
}
