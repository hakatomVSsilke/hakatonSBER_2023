import React from 'react';
import ButtonComponent from "../../elements/button/button.component";
import "./chatMessage.style.css";
import {TitleComponent} from "../../elements/title/title.component";

const ChatMessage = () => {
    return (
        <>
            <div id="chatBlock">
                <div className="textBlock">
                    <TitleComponent text="Чат"/>
                </div>
                <div id="display"></div>
                <div id="blockMessage">
                    <input type="text" id="inputText"/>
                    <ButtonComponent text="отправить" className="btn"/>
                </div>
            </div>

        </>
    );
};

export default ChatMessage;