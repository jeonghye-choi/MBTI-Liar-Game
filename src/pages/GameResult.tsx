import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameLayout from "../components/templates/GameLayout";
import useGameActions from "../hooks/useGameActions";

function GameResult() {
  let navigate = useNavigate();
  const gameActions = useGameActions();

  const onResetClick = () => {
    gameActions.voteOnProgress(dummy_votes);
    navigate("penalty");
  };

  const dummy_answer = "INFP";
  const dummy_question = "오늘 회사에서 우울한 일이 있었어요.";
  const dummy_winner = "라이어";
  const dummy_votes = "";

  useEffect(() => {}, []);

  return (
    <GameLayout
      header="none"
      contents={
        <>
          <h3>제시어는 '{}'이에요</h3>
          <h3>라이어를 밝혀내지 못했어요</h3>
          <div>'{dummy_winner}'가 이겼어요!!</div>
        </>
      }
      bottoms={
        <div>
          <button onClick={onResetClick}>다시하기</button>
          <button onClick={() => navigate("/")}>나가기</button>
        </div>
      }
    />
  );
}

export default GameResult;
