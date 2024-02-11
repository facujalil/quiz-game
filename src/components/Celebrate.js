import React, { useContext } from "react";
import "../css/Celebrate.css";
import { Context } from "../context/Context";

function Celebrate() {
  const { levelCounter } = useContext(Context);

  return (
    <>
      <img
        src={require("../img/celebration.gif")}
        className="celebration"
        alt="Celebration"
      />
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
      ) : levelCounter === 5 ? (
        <div className="win">
          <div className="einstein-img-container">
            <img
              src={require("../img/einstein.png")}
              alt="Einstein"
              className="animate__animated animate__backInDown"
            />
          </div>
          <p className="level-unlocked animate__animated animate__rubberBand">
            You win!
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Celebrate;
