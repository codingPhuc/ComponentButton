import "./App.css";
import { createContext, useContext, useState } from "react";
const CountContext = createContext();
function ComponentB() {
  const { count, countset } = useContext(CountContext);

  return (
    <div className="componentB">
      <button onClick={() => countset(count + 1)}>B button</button>
    </div>
  );
}
function ComponentA() {
  const [count, countset] = useState(0);
  return (
    <div className="componentA">
      <p>{count} </p>
      <CountContext.Provider value={{ count, countset }}>
        <ComponentB />
      </CountContext.Provider>
      <button onClick={() => countset(count + 1)}>A button</button>
    </div>
  );
}
function App() {
  return (
    <div className="componen_A">
      <ComponentA />
    </div>
  );
}

export default App;
