import React from "react";
import Messages from "./Messages";
import UserPage from "./UserPage";
import UserMessages from "./UserMessages";
import '../components-style/Nav.css';

const Nav = () => {
    return(
        <div className="nav">
            <UserPage />
            <Messages />
            <UserMessages />
        </div>
    )
}

export default Nav;