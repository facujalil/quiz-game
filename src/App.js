import React, { useContext } from "react";
import "./App.css";
import { GameContext } from "./context/GameContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Easy from "./pages/Easy";
import Medium from "./pages/Medium";
import Hard from "./pages/Hard";
import Expert from "./pages/Expert";

function App() {
  const { levelCounter } = useContext(GameContext);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/easy" element={<Easy />}></Route>
      <Route
        path="/medium"
        element={levelCounter < 2 ? <Navigate to="/" /> : <Medium />}
      ></Route>
      <Route
        path="/hard"
        element={levelCounter < 3 ? <Navigate to="/" /> : <Hard />}
      ></Route>
      <Route
        path="/expert"
        element={levelCounter < 4 ? <Navigate to="/" /> : <Expert />}
      ></Route>
    </Routes>
  );
}

export default App;
