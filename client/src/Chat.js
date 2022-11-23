import React, { useEffect, useState } from 'react';

function Chat({ socket, username, room }) {
    const [currentMessage, setCurrentMessage] = useState("");

    const sendMessage = async () => {
        if(currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes() 
            };

            await socket.emit('send_message', messageData);
        }
    }

    //recieve data from back
    useEffect(()=>{
        socket.on("recieve_message", (data) => {
            console.log(data);
        })
    });

    return (
        <div className='chat-window'>
            <div className='chat-header'>
                <p className='title'>Live Chat</p>
            </div>
            <div className='chat-body'></div>
            <div className='chat-footer'>
                <input type="text" placeholder="Hey..." onChange={(ev) => {
                    setCurrentMessage(ev.target.value);
                }} />
                <button onClick={sendMessage}>s</button>
            </div>
        </div>
    )
}

export default Chat;