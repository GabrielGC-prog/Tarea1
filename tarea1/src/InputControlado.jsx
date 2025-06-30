import { useState } from "react";

export const Input = () => {
  const [texto, setTexto] = useState("");
  function handleTexto(event) {
    setTexto(event.target.value);
  }
  return (
    <div>
      <p>Input controlado {Input}</p>
      <imput onChange={handleTexto} type="text" />
      <p>Texto actual: {texto}</p>
    </div>
  );
};
