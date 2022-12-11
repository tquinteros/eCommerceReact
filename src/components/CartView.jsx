import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder, exportArray } from "../Services/firestore";
import { cartContext } from "./../context/cartContext";
import Button from "./Button";
import CartForm from "./CartForm";
export default function CartView() {
  const { cart, removeItem, clear, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();
  // const [order, setOrder] = useState("")
  // function handleExport() {
  //   exportArray()
  // }
  async function handleCheckout(evt, data) {
    const order = {
      buyer: data,
      items: cart,
      total: priceInCart(),
      date: new Date(),
    };
    const orderId = await createOrder(order);
    // setOrder(orderId)
    navigate(`/thankyou/${orderId}`);
  }

  // if (order !== "") {
  //   return <h1 className="text-4xl text-center">Gracias por su compra</h1>
  // }
  if (cart.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="md:text-8xl text-6xl text-center">Carrito Vacío</h1>
      </div>
    );
  return (
    <div>
      {cart.map((item) => {
        return (
          <div className="flex items-center justify-center" key={item.id}>
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
      <div className="flex flex-col items-center">
        <h1 className="text-center text-3xl my-4">Total: ${priceInCart()}</h1>
        <Button onClick={clear}>Vaciar Carrito</Button>
      </div>
      <div className="flex gap-4 justify-center items-center mt-4">
        <CartForm onSubmit={handleCheckout} />
      </div>
    </div>
  );
}
