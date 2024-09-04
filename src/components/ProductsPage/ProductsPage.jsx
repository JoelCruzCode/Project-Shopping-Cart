// import { useParams } from "react-router-dom"
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import useProducts from "./useProducts";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsPage.module.css";
import { toTitleCase } from "../../utility";
export default function ProductsPage() {
  const { products, loading, error } = useProducts();
  const { name } = useParams();

  console.log(products);

  const filteredProducts = loading
    ? []
    : (products || []).filter((product) =>
        name === "men"
          ? product.category === "men's clothing"
          : name === "women"
          ? product.category === "women's clothing"
          : name === "electronics"
          ? product.category === "electronics"
          : name === "jewelry"
          ? product.category === "jewelery"
          : true
      );

  const title =
    name === "men"
      ? name
      : name === "women"
      ? name
      : name === "jewelry"
      ? name
      : name === "electronics"
      ? name
      : "all";

  return (
    <div>
      <header>
        <h1>E-Commerce</h1>
      </header>
      <NavBar></NavBar>
      <h2>{toTitleCase(title)}</h2>
      {loading ? (
        <div> Loading Products ... </div>
      ) : error ? (
        <div className={classes.errorMsg}> {error.message}</div>
      ) : (
        <div className={classes.productsContainer}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      )}
    </div>
  );
}

// TODO Create ErrorBoundary utilize suspense and error state
