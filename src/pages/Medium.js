import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import Game from "../components/Game";
import { mediumQuestions } from "../data/mediumQuestions";

function Medium() {
  const { levelCounter, setLevelCounter } = useContext(Context);

  useEffect(() => {
    if (levelCounter > 2) {
      setLevelCounter(2);
    }
  }, []);

  return <Game questions={mediumQuestions} />;
}

export default Medium;
