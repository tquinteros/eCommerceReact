import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../images/cart.png";
import {cartContext} from "../context/cartContext";

export default function CartWidget() {
  const miContext = useContext(cartContext);
  return (
    <div className="flex items-center relative mr-4">
      <Link to="/cart" className="hover:opacity-75">
        <img src={Cart} alt="Cart" />
        <span className="text-white absolute md:top-7 flex justify-center items-end md:left-2 top-[25%] left-[20%] bg-blue-700 rounded-full w-5 h-5 text-center">
          {miContext.itemsInCart()}
        </span>
      </Link>
    </div>
  );
}
