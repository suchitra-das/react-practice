import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./componets/Home";
import Card from "./componets/Card";
import Ecommerce from "./componets/Ecommerce";
import Layout from "./Hook/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "card",
    element: (
      <Layout>
        <Card />
      </Layout>
    ),
  },
  {
    path: "ecomm",
    element: (
      <Layout>
        <Ecommerce />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
