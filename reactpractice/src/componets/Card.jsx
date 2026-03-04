import { useContext } from "react";
import { AppContext } from "../App.jsx";
const Card = () => {
  const { addtocart } = useContext(AppContext);
  const { datas } = useContext(AppContext);

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {datas?.map((data) => (
        <div key={data.id} className="border p-10 rounded-lg shadow-lg">
          <div className="mb-3 font-semibold">{data.title}</div>

          <button
            onClick={() => addtocart(data.id)}
            className="border px-3 py-1 rounded bg-blue-700 text-white"
          >
            Add Cart
          </button>

          {/* {qty === 0 ? (
            <button
              onClick={() => addtocart(data.id)}
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
          )} */}
        </div>
      ))}
    </div>
  );
};

export default Card;
