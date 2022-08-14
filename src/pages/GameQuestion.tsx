import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import Text from "../components/atoms/Text";
import GameLayout from "../components/templates/GameLayout";
import useGameActions from "../hooks/useGameActions";

function GameQuestion() {
  let navigate = useNavigate();
  const gameActions = useGameActions();

  const onVoteLiarClick = () => {
    gameActions.voteLiar(dummy_votes);
    navigate(`/games/room/${dummy_gameroomId}/vote`);
  };

  const dummy_answer = "INFP";
  const dummy_question = "오늘 회사에서 우울한 일이 있었어요.";
  const dummy_votes = "";
  const dummy_gameroomId = "abcd";

  useEffect(() => {
    gameActions.getQuestion();
  }, [gameActions]);

  return (
    <GameLayout
      header="none"
      contents={
        <>
          <div>
            <Text fontSize="1.25rem" fontWeight="500">
              제시어는 '{dummy_answer}'이예요
            </Text>
            <div>{dummy_question}</div>
          </div>
          <div>
            <Text fontSize="1.25rem" fontWeight="500">
              순서
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
          </div>
        </>
      }
      bottoms={<button onClick={onVoteLiarClick}>투표 하기</button>}
    />
  );
}

export default GameQuestion;
