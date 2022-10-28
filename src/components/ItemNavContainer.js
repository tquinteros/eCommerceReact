import React from "react";
import { itemsLeft } from "../data/itemListData";
import Logo from "../images/logo.png";

export default function ItemNavContainer() {
  return (
    <div className="flex">
      <img src={Logo} width={100} alt="Logo" />
      <ul className="flex justify-center items-center">{itemsLeft}</ul>
    </div>
  );
}
