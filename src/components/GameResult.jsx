import { useContext } from "react";
import { AppContext } from "../App";

function GameResult() {
  const { myPoint, setMyPoint, setHint, point } = useContext(AppContext);

  const onClickReset = () => {
    localStorage.clear();
    localStorage.setItem("point", 0);
    setMyPoint(0);
    setHint("1~100의 숫자 중 하나를 맞춰보세요");
  };
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div className="text-xl py-3 font-bold">
        목표: 30점 이상을 달성하세요! 기회는 {point}번입니다.
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="text-xl flex justify-center items-center w-1/2 py-3 font-bold my-2 p-2 bg-slate-400 rounded-lg text-white">
          내 포인트: {myPoint}점
        </div>
        <button
          onClick={onClickReset}
          className="text-xl ml-3 bg-slate-400 rounded-lg text-white px-2 py-3"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default GameResult;
