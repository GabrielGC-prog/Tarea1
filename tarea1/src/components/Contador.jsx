import { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0);
  const handleSuma = () => setContador(contador + 1);
  const handleResta = () => setContador(contador - 1);
  const handleReset = () => setContador(0);
  return (
    <div>
      <p>Contador {contador}</p>
      <button onClick={handleSuma}>Sumar</button>
      <button onClick={handleResta}>Restar</button>
      <button onClick={handleReset}>Resetear</button>
    </div>
  );
};
