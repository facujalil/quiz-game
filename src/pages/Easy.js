import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Game from "../components/Game";
import { easyQuestions } from "../data/easyQuestions";

function Easy() {
  const { levelCounter } = useContext(GameContext);

  const previouslyCompletedLevel = levelCounter > 1;

  return (
    <Game
      questions={easyQuestions}
      previouslyCompletedLevel={previouslyCompletedLevel}
    />
  );
}

export default Easy;
