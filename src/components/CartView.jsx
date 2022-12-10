import React from "react";
import { useContext } from "react";
import { cartContext } from "./../context/cartContext";
import Button from "./Button";
export default function CartView() {
  const { cart, removeItem, clear, priceInCart } = useContext(cartContext);
  if (cart.length === 0) return(
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-8xl">Carrito Vacío</h1>
  </div>);
  return (
    <div>
      {cart.map((item) => {
        return (
          <div className="flex items-center justify-center">
            <div>
              <img src={item.img} alt="" className="object-cover" width={100} />
            </div>
            <div className="flex flex-col items-center my-4">
              <h2 className="text-center text-4xl">{item.name}</h2>
              <h3 className="text-center text-3xl my-2">${item.price}</h3>
              <h4 className="text-center text-2xl mb-3">
                Cantidad: {item.count}
              </h4>
              <Button onClick={() => removeItem(item.id)}>X</Button>
            </div>
          </div>
        );
      })}
      <h1 className="text-center text-3xl mt-4">Total: ${priceInCart()}</h1>
      <div className="flex justify-center items-center mt-4">
        <Button onClick={clear}>Vaciar Carrito</Button>
      </div>
    </div>
  );
}
