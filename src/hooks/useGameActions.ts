import request from "../utils/api";

function useGameActions() {
  function startGame(gameRoomId: string) {
    console.log("startGame 실행");
  }
  function getQuestion() {
    console.log("getQuestion 실행");
  }
  function voteLiar(votes: string) {
    console.log("voteLiar 실행");
  }
  function voteOnProgress(votes: string) {
    console.log("voteOnProgress 실행");
  }

  return {
    startGame,
    getQuestion,
    voteLiar,
    voteOnProgress,
  };
}

export default useGameActions;
