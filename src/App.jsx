import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ItemListContainer } from "./Components";
import CollapsibleExample from "./Components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CollapsibleExample />
      <ItemListContainer />
    </>
  );
}

export default App;
