import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameIntroNickname from "./pages/GameIntroNickname";
import GameIntroRoomId from "./pages/GameIntroRoomId";
import GamePenalty from "./pages/GamePenalty";
import GameQuestion from "./pages/GameQuestion";
import GameResult from "./pages/GameResult";
import GameRoom from "./pages/GameRoom";
import GameStart from "./pages/GameStart";
import GameVote from "./pages/GameVote";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="games/intro-roomId" element={<GameIntroRoomId />} />
        <Route path="games/intro-nickname" element={<GameIntroNickname />} />
        <Route path="games/room/:roomId" element={<GameRoom />} />
        <Route path="games/room/:roomId/penalty" element={<GamePenalty />} />
        <Route path="games/room/:roomId/start" element={<GameStart />} />
        <Route path="games/room/:roomId/question" element={<GameQuestion />} />
        <Route path="games/room/:roomId/vote" element={<GameVote />} />
        <Route path="games/room/:roomId/result" element={<GameResult />} />
      </Routes>
    </Router>
  );
}

export default App;
