import React from 'react'
import Cart from "../images/cart.png";

export default function CartWidget() {
  return (
    <div className="flex items-center relative mr-4">
    <a href="." className="hover:opacity-75"><img src={Cart} alt="Cart" />
    <span className='text-white absolute top-7 left-2 bg-blue-700 rounded-full w-5 h-5 text-center'>0</span>
    </a>
  </div>
  )
}
