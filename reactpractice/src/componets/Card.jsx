import { useContext } from "react";
import { AppContext } from "../App.jsx";

const Card = () => {
  const { addtocart, datas } = useContext(AppContext);

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {datas.map((data) => (
        <div key={data.id} className="border p-10 rounded-lg shadow-lg">
          <div className="mb-3 font-semibold">{data.title}</div>

          {data.count === 0 ? (
            <button
              onClick={() => addtocart(data.id)}
              className="border px-3 py-1 rounded bg-blue-700 text-white"
            >
              Add Cart
            </button>
          ) : (
            <div className="flex items-center gap-3 border px-3 py-1 rounded">
              <span className="cursor-pointer"  onClick={() => addtocart(data.id)}>-</span>
              {data.count}
              <span
                onClick={() => addtocart(data.id)}
                className="cursor-pointer"
              >
                +
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;