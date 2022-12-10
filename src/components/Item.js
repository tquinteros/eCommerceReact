import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Item(props) {
  const urlDetail = `/item/${props.id}`;
  return (
    <div className="bg-white sm:mx-auto shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:duration-300">
      <a href={urlDetail} className="flex justify-center">
        <img
          className="rounded-t-lg max-h-80"
          src={props.img}
          alt={props.name}
        />
      </a>
      <div className="p-5">
        <h5 className="text-gray-900 text-center font-bold text-2xl tracking-tight mb-2 dark:text-white">
          {props.name}
        </h5>
        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
          {props.desc}
        </p>
        <p className="text-gray-700 text-center text-2xl font-bold mb-5 dark:text-gray-400">
          ${props.price}
        </p>
        {props.discount && <p className="text-2xl text-center mb-4">Descuento: {props.discount}%</p>}
        <div className="flex justify-center">
          <Link to={urlDetail}>
            <Button>Ver Más</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
