import { createContext, useContext, useState } from "react";
import { AppContext } from "../App.jsx";
const Ecommerce = () => {
  const { qty ,setqty, addtocart} = useContext(AppContext);
  


  let datas = [
    {
      id: 1,
      title: "Card One",
      value: 10,
    },
    {
      id: 2,
      title: "Card 2",
      value: 20,
    },

    {
      id: 3,
      title: "Card 3",
      value: 30,
    },
    {
      id: 4,
      title: "Card 4",
      value: 40,
    },
    {
      id: 5,
      title: "Card 5",
      value: 50,
    },
    {
      id: 6,
      title: "Card 6",
      value: 60,
    },
  ];
  return (
    <div>
      {datas.map((data) => (
        <div className="border p-4">
          <div key={data.id}>{data.title}</div>

          {qty === 0 ? (
            <button
              onClick={() => addtocart(data)}
              className="border px-2 py-1"
            >
              Add card
            </button>
          ) : (
            <button>
              <span>-</span>
             {qty}
              <span>+</span>
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Ecommerce;
