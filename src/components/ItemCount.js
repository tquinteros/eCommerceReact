import React, { useState } from "react";
import Button from "./Button";

export default function ItemCount({ onAddToCart }) {
  let [cantidadItems, setCantidadItems] = useState(1);

  function handleAum() {
    //  (cantidadItems < props.stock)
    //    ? setCantidadItems(cantidadItems + 1)
    //    : alert("No hay mas stock");
    setCantidadItems(cantidadItems + 1);
  }

  function handleDis() {
    if (cantidadItems > 1) {
      setCantidadItems(cantidadItems - 1);
    }
  }
  return (
    <div className="flex flex-col md:w-1/2 lg:w-1/4 justify-centerl w-full">
      <div className="flex border items-center m-2 justify-between">
        <Button onClick={handleDis}>-</Button>
        <span>{cantidadItems}</span>
        <Button onClick={handleAum}>+</Button>
      </div>
      <Button onClick={() => onAddToCart(cantidadItems)}>
        Agregar al Carrito
      </Button>
    </div>
  );
}
