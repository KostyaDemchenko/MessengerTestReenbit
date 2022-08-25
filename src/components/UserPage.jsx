import React from "react";
import Search from "./Search";
import UserInfo from "./UserInfo";
import '../components-style/UserPage.css';

const UserPage = () => {
    return(
        <div className="user-page">
            <UserInfo />
            <Search />
        </div>
    )
}

export default UserPage;