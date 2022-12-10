import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartContextProvider} from "./context/cartContext";
import CartView from "./components/CartView";

export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
