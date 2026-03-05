import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./componets/Home";
import Card from "./componets/Card";

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

export const AppContext = createContext([]);

function App() {
  // const [cart, setcart] = useState([]);
  // const [qty, setqty] = useState(0);
  const [datas, setDatas] = useState([
    {
      id: 1,
      title: "Card One",
      value: 10,
      count: 0,
    },
    {
      id: 2,
      title: "Card 2",
      value: 20,
      count: 0,
    },

    {
      id: 3,
      title: "Card 3",
      value: 30,
      count: 0,
    },
    {
      id: 4,
      title: "Card 4",
      value: 40,
      count: 0,
    },
    {
      id: 5,
      title: "Card 5",
      value: 50,
      count: 0,
    },
    {
      id: 6,
      title: "Card 6",
      value: 60,
      count: 0,
    },
  ]);
  const [globalCount, setGlobalCount] = useState(0);

  const addtocart = (id) => {
    let result = [...datas];

    for (let i = 0; i < result.length; i++) {
      if (id === result[i].id) {
        result[i] = { ...result[i], count: result[i].count + 1 };

        setGlobalCount((prev) => prev + 1);
      }
    }

    setDatas(result);
  };


  useEffect(()=>{
    localStorage.setItem("datas", JSON.stringify(datas))
},[datas])


useEffect(()=>{

  const storeData = localStorage.getItem("datas")

    if (storeData) {
    setDatas(JSON.parse(storeData));
  }
},[

])
  return (
    <div>
      <AppContext.Provider value={{  addtocart, datas , globalCount}}>
        <RouterProvider router={router}></RouterProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
