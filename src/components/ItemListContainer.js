import { React, useState, useEffect } from "react";
import Item from "./Item";
import {getItems, getItemsByCategory} from "../Services/firestore";
import { useParams } from "react-router-dom";
import Loader from './Loader';
export default function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { categoryId } = useParams();
  const loader = <h3 className="text-center text-4xl mt-6">Cargando...</h3>;
  async function getItemsAsync() {
    if(!categoryId){
      let respuesta = await getItems();
      setProducts(respuesta);

    }
    else{
      let respuesta = await getItemsByCategory(categoryId)
      setProducts(respuesta)
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, [categoryId]);

  return (
    <div className="bg-gray-200 pb-6">
      {products ? (
        <>
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
                  discount={product.discount}
                />
              );
            })}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
