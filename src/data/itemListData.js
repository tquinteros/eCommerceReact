import React from "react";

const listItemsLeft = [
  {
    name: "Home",
    link: ".",
  },
  {
    name: "Remeras y Camisas",
    link: ".",
  },
  {
    name: "Buzos",
    link: ".",
  },
  {
    name: "Pantalones",
    link: ".",
  },
];

export const itemsLeft = listItemsLeft.map((listItemsLeft) => (
  <li key={listItemsLeft.name} className="text-white mx-2 hover:opacity-60">
    <a href={listItemsLeft.link}>{listItemsLeft.name}</a>
  </li>
));
