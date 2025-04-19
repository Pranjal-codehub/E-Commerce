import React from "react";
import { useSelector } from "react-redux"; //it has all state
import { Link } from "react-router-dom";

function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>Redux</span>
      <div>
        <Link className="navlink" to={"/"}>
          Home
        </Link>
        <Link className="navlink" to={"/cart"}>
          Cart
        </Link>
        <span>item:{items.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
