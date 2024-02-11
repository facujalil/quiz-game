import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import Game from "../components/Game";
import { expertQuestions } from "../data/expertQuestions";

function Expert() {
  const { levelCounter, setLevelCounter } = useContext(Context);

  useEffect(() => {
    if (levelCounter > 4) {
      setLevelCounter(4);
    }
  }, []);

  return <Game questions={expertQuestions} totalTime={5} />;
}

export default Expert;
