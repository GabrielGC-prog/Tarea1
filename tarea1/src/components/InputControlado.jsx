import { useState } from "react";

export const InputControlado = () => {
  const [texto, setTexto] = useState("");
  const handleTexto = (event) => {
    setTexto(event.target.value);
  };
  return (
    <div>
      <p>Input controlado {InputControlado}</p>
      <input onChange={handleTexto} type="text" />
      <p>Texto actual: {texto}</p>
    </div>
  );
};
