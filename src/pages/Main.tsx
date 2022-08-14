import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextBox from "../components/atoms/TextBox";
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
    <div
      style={{
        display: "grid",
        margin: "25px",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "2vw",
        alignItems: "center",
        height: "calc(100vh - 25px)",
      }}
    >
      <TextBox backgroundColor="green" onClick={onMakeGameRoomClick}>
        방 만들기
      </TextBox>
      <TextBox backgroundColor="grey" onClick={onFindGameRoomClick}>
        방 찾기
      </TextBox>
    </div>
  );
}

export default Main;
