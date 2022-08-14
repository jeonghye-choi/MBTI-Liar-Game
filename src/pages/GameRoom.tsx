import * as React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GameLayout from "../components/templates/GameLayout";
import useGameRoomActions from "../hooks/useGameRoomActions";

function GameRoom() {
  let navigate = useNavigate();
  const gameRoomActions = useGameRoomActions();

  const onOutofGameRoom = () => {
    gameRoomActions.deleteGameRoom(dummy_gameroomId);
    navigate("/");
  };
  const onInviteClick = () => {
    console.log("gameroomId", "copied!!");
  };

  const dummy_gameroomId = "abcd";
  const dummy_member_count = 4;

  useEffect(() => {}, []);

  return (
    <GameLayout
      header="settings"
      contents={
        <div>
          <div className="profile-box">
            <span>profile</span>
            <span>저는 방장입니다</span>
          </div>
          <div>
            <div>방 아이디는 '{dummy_gameroomId}'이에요</div>
            <div>현재 총 {dummy_member_count}명이 입장해 있어요</div>
          </div>
          <ul className="member-list">
            <li className="profile-box">
              <span>profile</span>
              <span>참가자2</span>
            </li>
            <li className="profile-box">
              <span>profile</span>
              <span>참가자3</span>
            </li>
            <li className="profile-box">
              <span>profile</span>
              <span>참가자4</span>
            </li>
          </ul>
        </div>
      }
      bottoms={
        <div>
          <div>
            <button onClick={onOutofGameRoom}>방나가기</button>
            <button onClick={onInviteClick}>초대하기</button>
          </div>
          <button onClick={() => navigate("penalty")}>게임 시작</button>
        </div>
      }
    />
  );
}

export default GameRoom;
