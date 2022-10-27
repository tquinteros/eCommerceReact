import React from "react";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <navbar className="flex justify-between bg-black">
        <ItemListContainer />
        <CartWidget />
      </navbar>
    </header>
  );
}
