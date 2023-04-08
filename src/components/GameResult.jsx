import { useContext } from "react";
import { AppContext } from "../App";

function GameResult() {
  const { myPoint } = useContext(AppContext);

  return (
    <div className=" w-full h-[50vh] flex flex-col justify-center items-center">
      <div className="w-1/2 h-[50vh] my-2 p-2 bg-slate-400 rounded-lg text-white">
        <div className="text-xl py-3 font-bold flex justify-center">
          내 포인트
        </div>
        <ul className="px-7 py-3 grid grid-rows-6 grid-flow-col gap-2">
          <li> {myPoint}점</li>
        </ul>
      </div>
    </div>
  );
}

export default GameResult;
