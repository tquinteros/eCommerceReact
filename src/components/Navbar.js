import React from "react";
import ItemNavContainer from "./ItemNavContainer";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between bg-black">
        <ItemNavContainer />
        <CartWidget />
      </div>
    </div>
  );
}
