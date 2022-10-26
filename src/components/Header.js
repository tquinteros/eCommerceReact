import React from "react";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

export default function Header() {
  return (
    <header>
      <navbar className="flex justify-between bg-black">
        <ItemListContainer />
        <CartWidget />
      </navbar>
    </header>
  );
}
