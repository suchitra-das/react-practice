import { createContext, useContext, useState } from "react";
import { AppContext } from "../App.jsx";
const Card = () => {
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
   <div className="grid grid-cols-3 gap-6 p-10">
  {datas.map((data) => (
    <div key={data.id} className="border p-10 rounded-lg shadow-lg">
      <div className="mb-3 font-semibold">{data.title}</div>

      {qty === 0 ? (
        <button
          onClick={() => addtocart(data)}
          className="border px-3 py-1 rounded bg-blue-700 text-white"
        >
          Add Cart
        </button>
      ) : (
        <button className="flex items-center gap-3 border px-3 py-1 rounded">
          <span className="cursor-pointer">-</span>
          {qty}
          <span className="cursor-pointer">+</span>
        </button>
      )}
    </div>
  ))}
</div>
  );
};

export default Card;
