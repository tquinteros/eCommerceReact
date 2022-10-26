import React from 'react'
import Cart from "../images/cart.png";

export default function CartWidget() {
  return (
    <div className="flex items-center mr-4">
    <a href="." className="hover:opacity-75"><img src={Cart} alt="Cart" /></a>
  </div>
  )
}
