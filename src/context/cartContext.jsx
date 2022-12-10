import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {

    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
    );

    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart)
    } else {

      product.count = count;

      newCart.push(product);

      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function priceInCart(){
    let totalpriceInCart = 0;
    cart.forEach(
      (product) =>
      (totalpriceInCart = totalpriceInCart + product.price * product.count)
    );
    return totalpriceInCart;
  }
  
  function clear() {
    setCart([]);
  }

  function removeItem(idRemove) {
    const newCart = [...cart];
    let filtered = newCart.filter((product) => product.id !== idRemove);
    setCart(filtered);
  }

  return (
    <cartContext.Provider value={{ addToCart, itemsInCart, cart, clear, removeItem, priceInCart }}>
      {props.children}
    </cartContext.Provider>
  );
}
