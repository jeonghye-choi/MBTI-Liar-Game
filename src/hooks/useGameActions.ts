import request from "../utils/api";

function useGameActions() {
  function startGame(gameRoomId: string) {
    request("POST", `/games`, {
      roomId: gameRoomId,
    })
      .then((response) => {
        // response가 200이라면,
        // liar가 나오고,
        // 단어가 나온다
      })
      .catch((error) => console.error(error));
  }
  function getQuestion() {
    request("GET", `/questions`)
      .then((response) => {
        // response가 200이라면,
        // 질문이 나온다
      })
      .catch((error) => console.error(error));
  }
  function voteLiar(votes: string) {
    request("POST", `/votes/liar`, {
      votesRequest: votes,
    })
      .then((response) => {
        // vote 결과가 나옴
      })
      .catch((error) => console.log(error));
  }
  function voteOnProgress(votes: string) {
    request("POST", `/votes/progress`, {
      votesRequest: votes,
    })
      .then((response) => {
        // true or false가 나옴
      })
      .catch((error) => console.log(error));
  }

  return {
    startGame,
    getQuestion,
    voteLiar,
    voteOnProgress,
  };
}

export default useGameActions;
