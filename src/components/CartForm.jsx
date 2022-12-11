import { useState } from "react";
import Button from "./Button";

export default function CartForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    // dynamic properties
    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(evt, data);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col items-center p-6 border-4">
        <label htmlFor="name">Nombre:</label>
        <input
          required
          value={data.name}
          name="name"
          placeholder="Nombre"
          type="text"
          className="text-black bg-gray-300 w-full h-8 pl-3.5 lg:h-10 rounded-lg placeholder:text-gray-500 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent"
          onChange={onInputChange}
        />
      </div>

      <div className="flex flex-col items-center p-6 border-4">
        <label htmlFor="email" className="">Email:</label>
        <input
          required
          value={data.email}
          name="email"
          type="email"
          placeholder="Email"
          onChange={onInputChange}
          className="text-black bg-gray-300 w-full h-8 pl-3.5 lg:h-10 rounded-lg placeholder:text-gray-500 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent"
        />
      </div>

      <div className="flex flex-col items-center p-6 border-4">
        <label htmlFor="phone">Teléfono:</label>
        <input
          required
          value={data.phone}
          name="phone"
          type="phone"
          placeholder="Teléfono"
          className="text-black bg-gray-300 w-full h-8 pl-3.5 lg:h-10 rounded-lg placeholder:text-gray-500 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent"
          onChange={onInputChange}
        />
      </div>
      <div className="flex mt-4 justify-center">
        <Button onClick={(evt) => props.handleCheckout(evt, data)}>
          Finalizar Compra
        </Button>
      </div>
    </form>
  );
}
