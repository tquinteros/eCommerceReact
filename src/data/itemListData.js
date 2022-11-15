import React from "react";
import { Link } from "react-router-dom";

const listItemsLeft = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Remeras y Camisas",
    link: "/category/torso",
  },
  {
    name: "Buzos",
    link: "/category/buzos",
  },
  {
    name: "Pantalones",
    link: "/category/pantalones",
  },
];

export const itemsLeft = listItemsLeft.map((listItemsLeft) => (
  <li key={listItemsLeft.name} className="text-white text-sm md:text-lg mx-2 hover:opacity-60">
    <Link to={listItemsLeft.link}>{listItemsLeft.name}</Link>
  </li>
));
