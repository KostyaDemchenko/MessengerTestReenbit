import React from "react";
import '../components-style/InputMessages.css';

const InputMessages = () => {
    return(
        <div className="input-messages">
            <div className="input-messages-wrapper">
                <div className="input-box">
                    <input type="text" className="input" placeholder="Type your message" />
                    <button type="submit" className="send-button" />
                </div>
            </div>
        </div>
    );
}

export default InputMessages;