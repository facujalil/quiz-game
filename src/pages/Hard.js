import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Game from "../components/Game";
import { hardQuestions } from "../data/hardQuestions";

function Hard() {
  const { levelCounter } = useContext(GameContext);

  const previouslyCompletedLevel = levelCounter > 3;

  return (
    <Game
      questions={hardQuestions}
      previouslyCompletedLevel={previouslyCompletedLevel}
    />
  );
}

export default Hard;
