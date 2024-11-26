import { useContext } from "react";
import CountContext from "../provider";

function ComponentInner() {
  const { count, incrementCount } = useContext(CountContext);

  return (
    <div className="componentInner">
      <p>{count}</p>
      <button onClick={incrementCount}>B button</button>
    </div>
  );
}
export default ComponentInner;
