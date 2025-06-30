import { useState } from "react";

export const InVisible = () => {
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <h2>Input controlado {}</h2>
      <button onClick={handleVisible}>{visible ? "Ocultar" : "Mostrar"}</button>
      {visible && <h2>Visible</h2>}
    </>
  );
};
