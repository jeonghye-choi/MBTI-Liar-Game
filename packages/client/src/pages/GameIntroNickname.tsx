import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import InputBox from "../components/atoms/InputBox";
import Text from "../components/atoms/Text";
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
          <Text fontSize="1.25rem" fontWeight="500">
            닉네임을 입력해 주세요
          </Text>
          <Text fontSize="1.25rem" fontWeight="500" color="#00AB2E">
            현재 총 3명이 입장해 있어요
          </Text>
          <Text fontSize="0.875rem" fontWeight="400" color="#666666">
            방 아이디는 '{dummy_gameroomId}'이에요
          </Text>
          <InputBox />
        </>
      }
      bottoms={
        <Button
          backgroundColor="green"
          onClick={() => navigate(`/games/room/${dummy_gameroomId}`)}
        >
          찾기
        </Button>
      }
    />
  );
}

export default GameIntroNickname;
