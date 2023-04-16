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
      <div className="relative w-1/2  my-2 p-2 flex justify-center bg-slate-400 rounded-lg text-white">
        <div className="text-xl py-3 font-bold ">내 포인트: {myPoint}점</div>
        <button
          onClick={onClickReset}
          className="text-lg absolute right-0 bottom-0 p-1"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default GameResult;
