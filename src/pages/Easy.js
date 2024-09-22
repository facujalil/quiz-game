import React, { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import Game from "../components/Game";
import { easyQuestions } from "../data/easyQuestions";

function Easy() {
  const { levelCounter, setLevelCounter } = useContext(GameContext);

  useEffect(() => {
    if (levelCounter > 1) {
      setLevelCounter(1);
    }
  }, []);

  return <Game questions={easyQuestions} />;
}

export default Easy;
