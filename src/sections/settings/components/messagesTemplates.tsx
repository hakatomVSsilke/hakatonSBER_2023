import React from 'react';
import "./messagesTemplates.style.css";
import ButtonComponent from "../../../components/elements/button/button.component";

const MessagesTemplates: React.FunctionComponent = () => {
    return (
        <div className="templateBlock">
            <div className="content">
                <div className="parameterSetting">
                    <div className="options">
                        <div className="text">Отклик прошёл собеседование</div>
                        <input type="checkbox" className="checkBoxStatus"/>

                        <div className="text">Не прошёл собеседование</div>
                        <input type="checkbox" className="checkBoxStatus"/>

                        <div className="text">В ожидании</div>
                        <input type="checkbox" className="checkBoxStatus"/>

                        <div className="text">Отклик не прошёл</div>
                        <input type="checkbox" className="checkBoxStatus"/>
                    </div>

                    <div className="message">
                        <textarea className="textArea"/>
                        <textarea className="textArea"/>
                        <textarea className="textArea"/>
                        <textarea className="textArea"/>
                    </div>
                </div>
                <div className="buttonBlock">
                    <ButtonComponent text="Отправить"/>
                </div>
            </div>
        </div>
    );
};

export default MessagesTemplates;