import { createContext, useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";

export const AppContext = createContext();

function App() {
  const [myPoint, setMyPoint] = useState(localStorage.getItem("point") | 0);

  useEffect(() => {
    let savedPoint = localStorage.getItem("point");

    if (!savedPoint) {
      localStorage.setItem("point", 0);
    }
  }, []);

  return (
    <AppContext.Provider value={{ myPoint, setMyPoint }}>
      <div className="bg-slate-300 min-h-screen flex flex-col justify-center items-center">
        <GameBoard />
        <GameResult />
      </div>
    </AppContext.Provider>
  );
}

export default App;
