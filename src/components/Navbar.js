import React from "react";
import ItemNavContainer from "./ItemNavContainer";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <navbar className="flex justify-between bg-black">
        <ItemNavContainer />
        <CartWidget />
      </navbar>
    </header>
  );
}
