import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Game from "../components/Game";
import { expertQuestions } from "../data/expertQuestions";

function Expert() {
  const { win } = useContext(GameContext);

  const previouslyCompletedLevel = win;

  return (
    <Game
      questions={expertQuestions}
      previouslyCompletedLevel={previouslyCompletedLevel}
    />
  );
}

export default Expert;
