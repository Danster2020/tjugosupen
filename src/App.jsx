import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import {GameLeader} from "./GameLeader";
import { Player } from "./Player";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/game-leader" element={<GameLeader></GameLeader>} />
        <Route path="/player" element={<Player></Player>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
