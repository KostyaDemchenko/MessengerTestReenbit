import React from "react";
import '../components-style/UserInfo.css'
import avatar from '../img/avatars/avatar1.jpg'

const UserInfo = () => {
    return(
        <div className="user-info">
            <div className="img-box">
                <img className="avatar" src={avatar} alt="avatar" />
                <div className="user-status"></div>
            </div>
            <p className="UserName"> Kostya Demchenko </p>
        </div>
    )
}

export default UserInfo;