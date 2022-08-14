import * as React from "react";
import { useNavigate } from "react-router-dom";
import GameLayout from "../components/templates/GameLayout";
import useGameRoomActions from "../hooks/useGameRoomActions";
import { useEffect } from "react";

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
      contents={<input type="text" />}
      bottoms={<button onClick={onFindGameRoomClick}>찾기</button>}
    />
  );
}

export default GameIntroRoomId;
