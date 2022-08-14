import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameLayout from "../components/templates/GameLayout";

function GameIntroNickname() {
  let navigate = useNavigate();

  const dummy_gameroomId = "abcd";

  useEffect(() => {}, []);

  return (
    <GameLayout
      header="back"
      contents={
        <>
          <h3>닉네임을 입력해 주세요</h3>
          <h3>현재 총 3명이 입장해 있어요</h3>
          <h4>방 아이디는 '{dummy_gameroomId}'이에요</h4>
          <input type="text" />
        </>
      }
      bottoms={
        <button onClick={() => navigate(`/games/room/${dummy_gameroomId}`)}>
          입장
        </button>
      }
    />
  );
}

export default GameIntroNickname;
