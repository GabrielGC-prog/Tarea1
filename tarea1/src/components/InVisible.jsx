import { useState } from "react";

export const InVisible = () => {
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <p>InVisible {}</p>
      <button onClick={handleVisible}>{visible ? "Ocultar" : "Mostrar"}</button>
      {visible && <h2>Visible</h2>}
    </>
  );
};
