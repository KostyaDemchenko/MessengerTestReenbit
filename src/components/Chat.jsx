import React from "react";
import '../components-style/Chat.css';
import SelectedUserChat from "./SelectedUserChat";

const Chat = () => {
    return(
        <div className="chat">
            <div className="chat-wrapper">
                <SelectedUserChat />
            </div>
        </div>
    );
}

export default Chat;