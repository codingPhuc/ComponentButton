import { createContext, useState } from "react";
import "./App.css";
import "./components/ComponentOuter";
import ComponentOuter from "./components/ComponentOuter";
import CountContext from "./provider";
function App() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <CountContext.Provider value={{ count, incrementCount }}>
      <ComponentOuter></ComponentOuter>
    </CountContext.Provider>
  );
}

export default App;
