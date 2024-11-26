import React, { useContext } from "react";
import CountContext from "../provider"; // Adjust the path as necessary
import ComponentInner from "./ComponentInner";
function ComponentOuter() {
  const { count, incrementCount } = useContext(CountContext);

  return (
    <div className="componentOuter">
      <ComponentInner></ComponentInner>
      <p>{count}</p>
      <button onClick={incrementCount}>A button</button>
    </div>
  );
}

export default ComponentOuter;
