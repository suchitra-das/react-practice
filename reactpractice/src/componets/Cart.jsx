import React, { useContext } from "react";
import { AppContext } from "../App.jsx";

export const Cart = () => {
  const { datas } = useContext(AppContext);

  const cartItems = datas.filter((item) => item.count > 0);

  return (
    <div>
      {cartItems.length === 0 ? (
        "Cart is Empty"
      ) : (
        cartItems.map((d) => (
          <div key={d.id} className="flex justify-around">
            <div>{d.id}</div>
            <div>{d.title}</div>
            <div>{d.value}</div>
            <div>Qty: {d.count}</div>
          </div>
        ))
      )}
    </div>
  );
};