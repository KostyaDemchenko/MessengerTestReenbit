import React from "react";
import '../components-style/UserMessages.css';
import ContactsProfile from "./ContactsProfile";

const UserMessages = () => {
    return(
        <div className="user-messages">
            <ContactsProfile />
            <ContactsProfile />
            <ContactsProfile />
            <ContactsProfile />
            <ContactsProfile />
            <ContactsProfile />
            <ContactsProfile />
        </div>
    )
}

export default UserMessages;