import "./App.css";
import { Contador } from "./components/Contador";
import { InputControlado } from "./components/InputControlado";
import { InVisible } from "./components/InVisible";

function App() {
  return (
    <>
      <h3>Contador</h3>
      <Contador />
      <h3>Input Controlado</h3>
      <InputControlado />
      <h3>Visible / Invisible</h3>
      <InVisible />
    </>
  );
}

export default App;
