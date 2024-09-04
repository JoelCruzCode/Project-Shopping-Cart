import classes from "./ProductCard.module.css";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  const { title, price, image } = props.product;
  return (
    <div className={classes.productCard}>
      <button className={classes.imgBtn} onClick={(e) => e.preventDefault()}>
        <img className={classes.productImg} src={image}></img>
      </button>
      <div>
        <Link className={classes.productLink} to="#">
          {title}
        </Link>
        <p>
          <b>{price}</b>
        </p>
        <div className={classes.options}>
          <button
            className={classes.addBtn}
            onClick={(e) => e.preventDefault()}
          >
            Add to cart
          </button>
          <input
            className={classes.optionsInput}
            type="number"
            min="1"
            max="10"
          />
        </div>
      </div>
    </div>
  );
}

// before edit
