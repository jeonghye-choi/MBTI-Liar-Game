import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useGameRoomActions from "../hooks/useGameRoomActions";

function Main() {
  let navigate = useNavigate();
  const gameRoomActions = useGameRoomActions();

  const onMakeGameRoomClick = () => {
    gameRoomActions.makeGameRoom();
  };
  const onFindGameRoomClick = () => {
    navigate("/games/intro-roomId");
  };

  useEffect(() => {}, []);

  return (
    <>
      <button onClick={onMakeGameRoomClick}>방 만들기</button>
      <button onClick={onFindGameRoomClick}>방 찾기</button>
    </>
  );
}

export default Main;
