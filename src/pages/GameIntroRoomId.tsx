import * as React from "react";
import { useNavigate } from "react-router-dom";
import GameLayout from "../components/templates/GameLayout";
import useGameRoomActions from "../hooks/useGameRoomActions";
import { useEffect } from "react";
import Button from "../components/atoms/Button";
import Text from "../components/atoms/Text";

function GameIntroRoomId() {
  let navigate = useNavigate();
  const gameRoomActions = useGameRoomActions();

  async function onFindGameRoomClick() {
    // const hasRoom = await gameRoomActions.findGameRoom(dummy_gamerooomId);
    const hasRoom = true;
    if (hasRoom) {
      navigate("/games/intro-nickname");
    } else {
      alert("없는 아이디에요! 다시 입력해주세요");
    }
  }

  const dummy_gamerooomId = "123";

  useEffect(() => {}, []);

  return (
    <GameLayout
      header="back"
      contents={
        <>
          <Text fontSize="1.25rem" fontWeight="500">
            방 아이디를 입력해 주세요
          </Text>
          <input type="text" />
        </>
      }
      contents={<input type="text" />}
      bottoms={
        <Button backgroundColor="green" onClick={onFindGameRoomClick}>
          찾기
        </Button>
      }
    />
  );
}

export default GameIntroRoomId;
