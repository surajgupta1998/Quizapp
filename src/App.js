import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState, createContext } from "react";

export const GameStateContext = createContext("")

function App({title}) {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);


  return (
    <div className="App">
      <h1>{title}</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore          
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz Questions/>}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
