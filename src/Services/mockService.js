import { products } from "../data/products";

export default function getItems(categoryId) {
    return new Promise((resolve) => {
      if (categoryId === undefined) {
        setTimeout(() => {
          resolve(products);
        }, 1000);
      } else {
        setTimeout(() => {
          let itemsFound = products.filter(
            (item) => item.category === categoryId
          );
          resolve(itemsFound);
        }, 1000);
      }
    });
}

export function getSingleItem(id) {
  return new Promise((resolve) => {
    let itemFound = products.find((item) => item.id === parseInt(id));
    setTimeout(() => {
      resolve(itemFound);
    }, 1250);
  });
}
