import { React, useState, useEffect } from "react";
import Item from "./Item";
import getItems from "../Services/mockService";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(categoryId);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [categoryId]);

  return (
    <div className="bg-gray-200 pb-6">
      <h1 className="text-center font-bold text-3xl pt-4">Shop</h1>
      <div className="grid gap-6 w-3/4 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
        {products.map((product) => {
          return (
            <Item
              id={product.id}
              key={product.id}
              name={product.name}
              price={product.price}
              desc={product.desc}
              img={product.img}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
}
