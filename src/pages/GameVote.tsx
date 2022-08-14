import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import Text from "../components/atoms/Text";
import GameLayout from "../components/templates/GameLayout";

function GameVote() {
  let navigate = useNavigate();

  const onVoteCompleteClick = () => {
    navigate(`/games/room/${dummy_gameroomId}/result`);
  };

  const dummy_gameroomId = "abcd";

  useEffect(() => {}, []);

  return (
    <GameLayout
      header="none"
      contents={
        <>
          <Text fontSize="1.25rem" fontWeight="500">
            투표를 해주세요
          </Text>
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
        </>
      }
      bottoms={<button onClick={onVoteCompleteClick}>투표 완료</button>}
    />
  );
}

export default GameVote;
