import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Game from './pages/game/Game'
import Lobby from './pages/lobby/Lobby'
import { WebSocketProvider } from './context/WebSocketContext'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game/:id" element={<Game />} />
                <Route path="/lobby/:room_id" element={<Lobby />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </>
    )
}

export default App
