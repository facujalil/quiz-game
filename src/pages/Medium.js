import React, { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import Game from "../components/Game";
import { mediumQuestions } from "../data/mediumQuestions";

function Medium() {
  const { levelCounter, setLevelCounter } = useContext(GameContext);

  useEffect(() => {
    if (levelCounter > 2) {
      setLevelCounter(2);
    }
  }, []);

  return <Game questions={mediumQuestions} />;
}

export default Medium;
