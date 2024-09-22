import React, { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import Game from "../components/Game";
import { hardQuestions } from "../data/hardQuestions";

function Hard() {
  const { levelCounter, setLevelCounter } = useContext(GameContext);

  useEffect(() => {
    if (levelCounter > 3) {
      setLevelCounter(3);
    }
  }, []);

  return <Game questions={hardQuestions} />;
}

export default Hard;
