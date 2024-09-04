import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch products. status: ${response.status}`
          );
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
        console.error(error);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { products, loading, error };
};

export default useProducts;
