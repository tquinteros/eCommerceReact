import React from 'react'
import { productList } from "../data/products";

export default function Products() {
  return (
    <div className="bg-gray-200 pb-6">
    <h1 className="text-center font-bold text-3xl pt-4">Shop</h1>
    <div className="grid gap-6 w-3/4 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
        {productList}
    </div>
  </div>
  )
}
