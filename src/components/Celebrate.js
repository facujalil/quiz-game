import React, { useContext } from "react";
import "../css/Celebrate.css";
import { GameContext } from "../context/GameContext";
import einstein from "../img/einstein.png";
import celebration from "../img/celebration.gif";

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
      <p className="level-unlocked animate__animated animate__rubberBand">
        You win!
      </p>
    </div>
  ) : (
    <>
      <img src={celebration} className="celebration" alt="Celebration" />
      {levelCounter === 2 ? (
        <p className="level-unlocked animate__animated animate__rubberBand">
          Level medium unlocked!
        </p>
      ) : levelCounter === 3 ? (
        <p className="level-unlocked animate__animated animate__rubberBand">
          Level hard unlocked!
        </p>
      ) : levelCounter === 4 ? (
        <p className="level-unlocked animate__animated animate__rubberBand">
          Level expert unlocked!
        </p>
      ) : null}
    </>
  );
}

export default Celebrate;
