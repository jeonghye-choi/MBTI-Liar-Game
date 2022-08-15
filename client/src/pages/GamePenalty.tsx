import * as React from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import InputBox from "../components/atoms/InputBox";
import Text from "../components/atoms/Text";
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
          <Text fontSize="1.25rem" fontWeight="500">
            벌칙을 입력해 주세요
          </Text>
          <InputBox />
        </>
      }
      bottoms={
        <Button backgroundColor="green" onClick={onCompleteClick}>
          완료
        </Button>
      }
    />
  );
}

export default GamePenalty;
