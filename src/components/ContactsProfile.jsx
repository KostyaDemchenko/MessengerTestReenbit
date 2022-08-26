import React from "react";
import '../components-style/UserInfo.css'
import '../components-style/ContactsProfile.css';
import avatar from '../img/avatars/avatar1.jpg'

const ContactsProfile = () => {
    return(
        <div className="contacts-profile">
            <div className="img-box">
                <img className="avatar" src={avatar} alt="avatar" />
                <div className="contacts-status" />
            </div>
            <p className="contacts-name"> Enrique Diaz </p>
        </div>
    )
}

export default ContactsProfile;