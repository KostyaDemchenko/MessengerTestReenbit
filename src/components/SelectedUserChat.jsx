import React from "react";
import '../components-style/UserInfo.css'
import '../components-style/SelectedUserChat.css';
import avatar from '../img/avatars/avatar1.jpg'

const SelectedUserChat = () => {
    return(
        <div className="selected-user-chat">
            <div className="selected-user-chat-wrapper">
                <div className="img-box">
                    <img className="avatar" src={avatar} alt="avatar" />
                    <div className="contacts-status" />
                </div>
                <p className="contacts-name"> Enrique Diaz </p>
            </div>
        </div>
    );
}

export default SelectedUserChat;