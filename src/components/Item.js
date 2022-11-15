import React from "react";
import Button from "./Button";

export default function Item(props) {
  return (
    <div className="bg-white sm:mx-auto shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:duration-300">
      <a href="." className="flex justify-center">
        <img className="rounded-t-lg max-h-80" src={props.img} alt={props.name} />
      </a>
      <div className="p-5">
        <a href=".">
          <h5 className="text-gray-900 hover:opacity-70 font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {props.name}
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
          {props.desc}
        </p>
        <p className="text-gray-700 text-center text-2xl font-bold mb-5 dark:text-gray-400">
          ${props.price}
        </p>
        <div className="flex justify-center">
          <Button>Ver Más</Button>
        </div>
      </div>
    </div>
  );
}
