import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import Game from "../components/Game";
import { easyQuestions } from "../data/easyQuestions";

function Easy() {
  const { levelCounter, setLevelCounter } = useContext(Context);

  useEffect(() => {
    if (levelCounter > 1) {
      setLevelCounter(1);
    }
  }, []);

  return <Game questions={easyQuestions} totalTime={20} />;
}

export default Easy;
