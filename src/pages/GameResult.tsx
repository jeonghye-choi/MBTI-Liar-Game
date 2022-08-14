import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import Text from "../components/atoms/Text";
import GameLayout from "../components/templates/GameLayout";
import useGameActions from "../hooks/useGameActions";

function GameResult() {
  let navigate = useNavigate();
  const gameActions = useGameActions();

  const onResetClick = () => {
    gameActions.voteOnProgress(dummy_votes);
    navigate(`/games/room/${dummy_gameroomId}/penalty`);
  };

  const dummy_answer = "INFP";
  const dummy_question = "오늘 회사에서 우울한 일이 있었어요.";
  const dummy_winner = "라이어";
  const dummy_votes = "";
  const dummy_gameroomId = "abcd";

  useEffect(() => {}, []);

  return (
    <GameLayout
      header="none"
      contents={
        <>
          <Text fontSize="1.25rem" fontWeight="500">
            제시어는 '{dummy_answer}'이에요
          </Text>
          <Text fontSize="1.25rem" fontWeight="500" color="#00AB2E">
            라이어를 밝혀내지 못했어요
          </Text>
          <div>'{dummy_winner}'가 이겼어요!!</div>
        </>
      }
      bottoms={
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1vw",
          }}
        >
          <Button backgroundColor="green" onClick={onResetClick}>
            다시하기
          </Button>
          <Button backgroundColor="grey" onClick={() => navigate("/")}>
            나가기
          </Button>
        </div>
      }
    />
  );
}

export default GameResult;
