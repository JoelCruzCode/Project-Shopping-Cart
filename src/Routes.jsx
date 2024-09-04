import App from "./App";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products/:name",
    element: <ProductsPage />,
    children: [
      {
        path: ":name",
        element: <ProductsPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
