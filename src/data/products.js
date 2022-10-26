import React from 'react';
import Button from '../components/Button'

const products = [
    {
        name: "Remera",
        desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        img: "https://http2.mlstatic.com/D_NQ_NP_762746-MLA51622925433_092022-W.webp",
        price: 2500,
    },
    {
        name: "Pantalón",
        desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        img: "https://http2.mlstatic.com/D_NQ_NP_982965-MLA51249629126_082022-W.webp",
        price: 4000,
    },
    {
        name: "Musculosa",
        desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        img: "https://http2.mlstatic.com/D_NQ_NP_729847-MLA51480684641_092022-W.webp",
        price: 4500,
    },
    {
        name: "Camisa",
        desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        img: "https://http2.mlstatic.com/D_NQ_NP_859549-MLA31013662925_062019-W.webp",
        price: 11500,
    },
    {
        name: "Buzo",
        desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        img: "https://http2.mlstatic.com/D_NQ_NP_882461-MLA43625506125_092020-W.webp",
        price: 14500,
    },
    {
        name: "Jogger",
        desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        img: "https://http2.mlstatic.com/D_NQ_NP_941360-MLA51540016766_092022-W.webp",
        price: 3500,
    },
]

export const productList = products.map((products) => (
    <div className="bg-white sm:mx-auto shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:duration-300">
    <a href="." className='flex justify-center'>
      <img className="rounded-t-lg max-h-80" src={products.img} alt="" />
    </a>
    <div className="p-5">
      <a href=".">
        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
          {products.name}
        </h5>
      </a>
      <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
        {products.desc}
      </p>
      <p className="text-gray-700 text-center text-2xl font-bold mb-5 dark:text-gray-400">
        ${products.price}
      </p>
      <div className="flex justify-center">
        <Button>Comprar</Button>
      </div>
    </div>
  </div>
));