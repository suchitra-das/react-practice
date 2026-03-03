import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-amber-500">
      <ul className="flex  justify-between p-10">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/ecomm">Ecomm</NavLink>
        </li>

        <li>
          <NavLink to="/card">Card</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
