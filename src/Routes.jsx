import App from "./App";
import ProductsPage from "./components/ProductsPage/ProductsPage";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "products:name",
    element: <ProductsPage />,
  },
];

export default routes;
