import React from "react";
import '../components-style/Chat.css';
import InputMessages from "./InputMessages";
import MessagesHolder from "./MessagesHolder";
import SelectedUserChat from "./SelectedUserChat";

const Chat = () => {
    return(
        <div className="chat">
            <div className="chat-wrapper">
                <SelectedUserChat />
                <MessagesHolder />
                <InputMessages />
            </div>
        </div>
    );
}

export default Chat;