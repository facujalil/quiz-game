import { useState } from "react";
import { Context } from "./Context";

function Provider({ children }) {
  const [levelCounter, setLevelCounter] = useState(1);
  const [celebrate, setCelebrate] = useState(false);

  const value = {
    levelCounter,
    setLevelCounter,
    celebrate,
    setCelebrate,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
