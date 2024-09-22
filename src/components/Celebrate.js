import React, { useContext } from "react";
import "../css/Celebrate.css";
import { GameContext } from "../context/GameContext";
import einstein from "../img/einstein.png";
import confetti from "../img/confetti.gif";

function Celebrate() {
  const { win, levelCounter } = useContext(GameContext);

  return win ? (
    <div className="win">
      <div className="einstein-img-container">
        <img
          src={einstein}
          alt="Einstein"
          className="animate__animated animate__backInDown"
        />
      </div>
      <p className="celebration-message animate__animated animate__rubberBand">
        You win!
      </p>
    </div>
  ) : (
    <>
      <img src={confetti} alt="Confetti" className="confetti" />
      {levelCounter === 2 ? (
        <p className="celebration-message animate__animated animate__rubberBand">
          Medium level unlocked!
        </p>
      ) : levelCounter === 3 ? (
        <p className="celebration-message animate__animated animate__rubberBand">
          Hard level unlocked!
        </p>
      ) : levelCounter === 4 ? (
        <p className="celebration-message animate__animated animate__rubberBand">
          Expert level unlocked!
        </p>
      ) : null}
    </>
  );
}

export default Celebrate;
