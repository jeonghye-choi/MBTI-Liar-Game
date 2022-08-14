import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import GameLayout from "../components/templates/GameLayout";
import useGameActions from "../hooks/useGameActions";

function GameStart() {
  let navigate = useNavigate();
  const gameActions = useGameActions();

  const onGameStartClick = () => {
    gameActions.startGame(dummy_gameroomId);
    navigate(`/games/room/${dummy_gameroomId}/question`);
  };

  const dummy_gameroomId = "abcd";
  const dummy_countdown = 5;

  return (
    <GameLayout
      header="none"
      contents={<div>card</div>}
      bottoms={
        <Button backgroundColor="green" onClick={onGameStartClick}>
          {dummy_countdown}초 후 게임을 시작해요
        </Button>
      }
    />
  );
}

export default GameStart;
