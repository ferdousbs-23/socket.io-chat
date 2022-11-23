import './App.css';
import { useState } from 'react';
import io from 'socket.io-client';
import Chat from './Chat.js';

const socket = io.connect("http://localhost:3001");

function App() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);


  //join chat room,emit event
  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <div className="App">
        <div className="joinChatContainer">
          <h3>Join a chat</h3>
          <input type="text" placeholder="John..." onChange={(ev) => setUserName(ev.target.value)} />
          <input type="text" placeholder="Room ID..." onChange={(ev) => setRoom(ev.target.value)} />
          <button onClick={joinRoom}>Join a Room</button>
          <Chat socket={socket} username={userName} room={room} />
        </div>
    </div>
  );
}

export default App;
