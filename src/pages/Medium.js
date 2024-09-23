import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Game from "../components/Game";
import { mediumQuestions } from "../data/mediumQuestions";

function Medium() {
  const { levelCounter } = useContext(GameContext);

  const previouslyCompletedLevel = levelCounter > 2;

  return (
    <Game
      questions={mediumQuestions}
      previouslyCompletedLevel={previouslyCompletedLevel}
    />
  );
}

export default Medium;
