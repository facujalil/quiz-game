import React, { useContext, useEffect } from "react";
import "../css/Home.css";
import { GameContext } from "../context/GameContext";
import { NavLink } from "react-router-dom";
import Celebrate from "../components/Celebrate";
import NavItem from "../components/NavItem";

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
            <NavLink to="/easy" className="level easy">
              <span>Easy</span>
            </NavLink>

            <NavItem
              locked={levelCounter === 1}
              lockedMessage="Complete level 1"
              to="/medium"
              className="level medium"
            >
              <span>Medium</span>
            </NavItem>

            <NavItem
              locked={levelCounter < 3}
              lockedMessage={
                levelCounter === 1
                  ? "Complete levels 1 and 2"
                  : "Complete level 2"
              }
              to="/hard"
              className="level hard"
            >
              <span>Hard</span>
            </NavItem>

            <NavItem
              locked={levelCounter < 4}
              lockedMessage={
                levelCounter === 1
                  ? "Complete levels 1, 2 and 3"
                  : levelCounter === 2
                  ? "Complete levels 2 and 3"
                  : "Complete level 3"
              }
              to="/expert"
              className="level expert"
            >
              <span>Expert</span>
            </NavItem>
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
