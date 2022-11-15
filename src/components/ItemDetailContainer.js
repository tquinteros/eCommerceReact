import { React, useState, useEffect } from "react";
import { getSingleItem } from "../Services/mockService";
// import Button from "./Button";
// import Item from "./Item";
// import ItemCount from "./ItemCount";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  
  async function getItemsAsync() {
    let respuesta = await getSingleItem(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <div className="bg-gray-200 pt-12 pb-6">
        <ItemDetail product={product}/>
    </div>
  );
}
