import webSocket from "../webSocket";
import request from "../utils/api";

function useGameRoomActions() {
  function findGameRoom(gameRoomId: string) {
    console.log("findGameRoom 실행");
  }
  function makeGameRoom() {
    console.log("makeGameRoom 실행");
    webSocket.send(
      `{"sharingCode":null,"type":"CREATE","userId":null,"message":null}`,
    );
  }
  function deleteGameRoom(gameRoomId: string) {
    console.log("deleteGameRoom 실행");
  }

  return {
    findGameRoom,
    makeGameRoom,
    deleteGameRoom,
  };
}

export default useGameRoomActions;
