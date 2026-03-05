import { NavLink } from "react-router-dom";
import {AppContext} from '../App.jsx'
import { useContext } from "react";

const Navbar = () => {
      const {globalCount} =useContext(AppContext)
  return (
    <div className="bg-amber-500">
      <ul className="flex  justify-between p-10">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/card" className={({ isActive }) =>
  `text-xl font-bold cursor-pointe ${isActive ? "text-white" : "text-gray-600"}`
}>Ecommerce</NavLink>
        </li>
        

        
        <li>
          <NavLink to="/cart">Cart<sup className="rounded-full p-1 bg-red-700">{globalCount}</sup></NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
