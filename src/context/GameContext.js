import { createContext, useState } from "react";

export const GameContext = createContext();

function GameProvider({ children }) {
  const [levelCounter, setLevelCounter] = useState(1);
  const [win, setWin] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  const value = {
    levelCounter,
    setLevelCounter,
    win,
    setWin,
    celebrate,
    setCelebrate,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameProvider;
