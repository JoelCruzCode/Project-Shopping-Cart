import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import ProductsPage from "../ProductsPage/ProductsPage";
import ErrorPage from "../ErrorPage/ErrorPage";
export default function HomePage() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => setProducts(() => data))
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .finally(() => setLoading((loading) => !loading));
  }, []);

  if (!loading) {
    console.log(products);
  }

  return (
    <div>
      <NavBar></NavBar>
      <p>HomePage</p>
    </div>
  );
}
