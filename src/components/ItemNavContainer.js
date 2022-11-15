import React from "react";
import { itemsLeft } from "../data/itemListData";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function ItemNavContainer() {
  return (
    <div className="flex">
      <Link to="/"><img src={Logo} width={100} alt="Logo" /></Link>
      <ul className="flex justify-center items-center">{itemsLeft}</ul>
    </div>
  );
}
