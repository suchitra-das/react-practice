import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";
import Home from "./componets/Home";
import Card from "./componets/Card";
import Ecommerce from "./componets/Card";
import Layout from "./Hook/Layout";
import { Cart } from "./componets/Cart";

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
    path: "cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  
]);

export const AppContext=createContext();
function App() {
  const [cart,setcart] =useState([]) 
  const [qty,setqty] =useState(0) 
  const addtocart = (data)=>{
    //  setcart(cart[id]?cart[id]+1:cart[id])
    setcart((prev=>[...prev,data]))
    setqty((id)=>id?qty+1:1)
  }
  return (
    <div>
<AppContext.Provider value={{qty,cart,addtocart,setcart}}>
      <RouterProvider router={router}></RouterProvider>
</AppContext.Provider>
    </div>
  );
}

export default App;
