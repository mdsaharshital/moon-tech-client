import { RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import routes from "./routes/routes";

function App() {
  //  feature to develop => 1. wishlist at a time, not multiple, delete cart and wishlist
  return (
    <ProductProvider>
      <RouterProvider router={routes} />
    </ProductProvider>
  );
}

export default App;
