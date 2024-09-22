import React, { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import Game from "../components/Game";
import { expertQuestions } from "../data/expertQuestions";

function Expert() {
  const { win, setWin } = useContext(GameContext);

  useEffect(() => {
    if (win) {
      setWin(false);
    }
  }, []);

  return <Game questions={expertQuestions} />;
}

export default Expert;
