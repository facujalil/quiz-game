import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import Game from "../components/Game";
import { hardQuestions } from "../data/hardQuestions";

function Hard() {
  const { levelCounter, setLevelCounter } = useContext(Context);

  useEffect(() => {
    if (levelCounter > 3) {
      setLevelCounter(3);
    }
  }, []);

  return <Game questions={hardQuestions} />;
}

export default Hard;
