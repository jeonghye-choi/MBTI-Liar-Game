import * as React from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import GameLayout from "../components/templates/GameLayout";

function GamePenalty() {
  let navigate = useNavigate();

  const onCompleteClick = () => {
    navigate(`/games/room/${dummy_gameroomId}/start`);
  };

  const dummy_gameroomId = "abcd";

  useEffect(() => {}, []);

  return (
    <GameLayout
      header="back"
      contents={
        <>
          <h3>벌칙을 입력해 주세요</h3>
          <input type="text" />
        </>
      }
      bottoms={<button onClick={onCompleteClick}>완료</button>}
    />
  );
}

export default GamePenalty;
