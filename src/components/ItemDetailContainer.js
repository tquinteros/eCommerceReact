import { React, useState, useEffect } from "react";
import { getSingleItem } from "../Services/mockService";
// import Button from "./Button";
// import Item from "./Item";
// import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from './Loader';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  async function getItemsAsync() {
    getSingleItem(id).then((respuesta) => {
      setProduct(respuesta);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  if (isLoading) return <Loader/>;
  return (
    <div className="bg-gray-200 pt-12 pb-6">
      <ItemDetail product={product} />
    </div>
  );
}
