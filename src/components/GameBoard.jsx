import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

function GameBoard() {
  const [hint, setHint] = useState("1~100의 숫자 중 하나를 맞춰보세요");
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [inputNum, setInputNum] = useState("");
  const [point, setPoint] = useState(5);
  const { myPoint, setMyPoint } = useContext(AppContext);

  const onChangeNum = (e) => {
    setInputNum(e.target.value);
  };

  const onClickCheck = (e) => {
    e.preventDefault();
    let checkNum = parseInt(inputNum);

    if (checkNum < 1 || checkNum > 100) {
      setHint("1~100까지의 숫자를 입력해주세요!");
      return;
    }

    if (isNaN(checkNum)) {
      setHint("숫자를 입력해주세요!");
      return;
    }

    if (checkNum < randomNum) {
      setHint("UP👆");
      setInputNum("");
      setPoint(point - 1);
    } else if (checkNum > randomNum) {
      setHint("DOWN👇");
      setInputNum("");
      setPoint(point - 1);
    } else {
      setHint("정답🎉🎉🎉");

      if (point >= 0) {
        localStorage.setItem("point", JSON.stringify(point));
        setMyPoint(localStorage.getItem("point"));
      }
      setInputNum("");
      setRandomNum(Math.floor(Math.random() * 100) + 1);
      setPoint(5);
    }
    if (point < 1) {
      setHint("실패! 새 게임을 시작합니다");
      setInputNum("");
      setRandomNum(Math.floor(Math.random() * 100) + 1);
      setPoint(5);
    }
  };

  useEffect(() => {
    console.log(`랜덤 숫자는 ${randomNum}입니다`);
  }, [randomNum]);

  useEffect(() => {
    console.log(`입력하신 숫자는 ${inputNum}입니다`);
  }, [inputNum]);

  useEffect(() => console.log(`현재 포인트: ${point}점`), [point]);

  return (
    <div className="w-full h-[50vh] flex flex-col justify-center items-center">
      <div className="text-4xl  mb-4 font-bold border-2 border-white p-3 pb-5">
        Up-Down Game
      </div>
      <div className="text-4xl mt-4 mb-4 font-bold">{hint}</div>
      <div>
        <form onSubmit={onClickCheck}>
          <input
            className="rounded-lg py-2 mr-3 focus:outline-slate-300 shadow-md"
            type="text"
            value={inputNum}
            onChange={onChangeNum}
          />
          <input
            className="border-2 border-white rounded-lg shadow-md py-2 px-3 cursor-pointer"
            type="submit"
            value="확인"
          />
        </form>
      </div>
    </div>
  );
}

export default GameBoard;
