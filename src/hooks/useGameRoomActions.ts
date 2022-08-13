import request from "../utils/api";

function useGameRoomActions() {
  function findGameRoom(gameRoomId: string) {
    request("GET", `/games/rooms/${gameRoomId}`, {
      board_id_or_path: gameRoomId,
    })
      .then((response) => {
        // response가 200이라면,
        // 다음 페이지로 넘기기
        //
        // response가 ...라면,
        // 없는 아이디 입니다! 다시 입력해주세요!
      })
      .catch((error) => console.error(error));
  }
  function makeGameRoom() {
    request("POST", `/games/rooms`, {
      //
    })
      .then((response) => {
        // 방 만들기 스탭으로!
      })
      .catch((error) => console.log(error));
  }
  function deleteGameRoom(gameRoomId: string) {
    request("DELETE", `/games/rooms/${gameRoomId}`, {
      //
    })
      .then((response) => {
        // 방 만들기 스탭으로!
      })
      .catch((error) => console.log(error));
  }

  return {
    findGameRoom,
    makeGameRoom,
    deleteGameRoom,
  };
}

export default useGameRoomActions;
