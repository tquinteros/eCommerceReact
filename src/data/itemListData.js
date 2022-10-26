import React from "react";

const listItemsLeft = [
  {
    name: "Home",
    link: ".",
  },
  {
    name: "Nosotros",
    link: ".",
  },
  {
    name: "¿Cómo comprar?",
    link: ".",
  },
  {
    name: "Novedades",
    link: ".",
  },
];

export const itemsLeft = listItemsLeft.map((listItemsLeft) => (
  <li key={listItemsLeft.name} className="text-white mx-2 hover:opacity-60">
    <a href={listItemsLeft.link}>{listItemsLeft.name}</a>
  </li>
));
