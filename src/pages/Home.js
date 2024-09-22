import React, { useContext, useEffect } from "react";
import "../css/Home.css";
import { GameContext } from "../context/GameContext";
import { NavLink } from "react-router-dom";
import Celebrate from "../components/Celebrate";

function Home() {
  const { celebrate, setCelebrate, win, levelCounter } =
    useContext(GameContext);

  useEffect(() => {
    if (celebrate && !win) {
      const timeout = setTimeout(() => {
        setCelebrate(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
        if (celebrate) {
          setCelebrate(false);
        }
      };
    }

    return () => {
      if (celebrate) {
        setCelebrate(false);
      }
    };
  }, []);

  return (
    <div className="home">
      {celebrate ? (
        <Celebrate />
      ) : (
        <>
          <h1>Quiz Game</h1>
          <nav>
            <NavLink to="/easy" className="easy">
              <span>Easy</span>
            </NavLink>

            <NavLink
              to={levelCounter >= 2 ? "/medium" : null}
              title={levelCounter === 1 ? "Complete level 1" : null}
              className={levelCounter === 1 ? "medium locked" : "medium"}
            >
              <span>Medium</span>
            </NavLink>

            <NavLink
              to={levelCounter >= 3 ? "/hard" : null}
              title={
                levelCounter === 1
                  ? "Complete levels 1 and 2"
                  : levelCounter <= 2
                  ? "Complete level 2"
                  : null
              }
              className={levelCounter <= 2 ? "hard locked" : "hard"}
            >
              <span>Hard</span>
            </NavLink>
            <NavLink
              to={levelCounter >= 4 ? "/expert" : null}
              title={
                levelCounter === 1
                  ? "Complete levels 1, 2 and 3"
                  : levelCounter <= 2
                  ? "Complete level 2 y 3"
                  : levelCounter <= 3
                  ? "Complete level 3"
                  : null
              }
              className={levelCounter <= 3 ? "expert locked" : "expert"}
            >
              <span>Expert</span>
            </NavLink>
          </nav>

          <footer>
            <p>
              &copy; Coded by{" "}
              <a
                href="https://github.com/facujalil"
                target="_blank"
                rel="noreferrer"
              >
                Facundo Jalil
                <i className="fab fa-github-square" aria-hidden="true"></i>
              </a>
            </p>
          </footer>
        </>
      )}
    </div>
  );
}

export default Home;
