import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";

function App() {
  return (
    <div className="bg-slate-300 flex items-center justify-center">
      <GameBoard />
      <GameResult />
    </div>
  );
}

export default App;
