import React from "react";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "./../context/cartContext";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function ItemDetail({ product }) {
  const { addToCart } = useContext(cartContext);
  const [isInCart, setIsInCart] = useState(false);
  function onAddToCart(count) {
    setIsInCart(count);
    addToCart(product, count);
  }
  return (
    <div className="bg-white mx-auto shadow-lg border border-gray-200 rounded-lg w-3/4 dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg max-h-60 mx-auto"
        src={product.img}
        alt={product.name}
      />
      <div className="p-5">
        <h5 className="text-gray-900 text-center font-bold text-2xl tracking-tight mb-2 dark:text-white">
          {product.name}
        </h5>
        <p className="font-normal text-center text-gray-700 mb-3 dark:text-gray-400">
          {product.desc}
        </p>
        <p className="text-gray-700 text-center text-2xl font-bold mb-5 dark:text-gray-400">
          ${product.price}
        </p>
        <div className="flex gap-4 items-center flex-col">
          {isInCart ? (
            <Link to="/cart">
              <Button>Ir al Carrito</Button>
            </Link>
          ) : (
            <ItemCount onAddToCart={onAddToCart} />
          )}
        </div>
      </div>
    </div>
  );
}
