import React, {useState} from 'react';
import "./messagesTemplates.style.css";
import ButtonComponent from "../../../components/elements/button/button.component";
import {useHttp} from "../../../hooks/useHTTP";

const MessagesTemplates: React.FunctionComponent = () => {
    const {request} = useHttp();
    const [isLoading, setLoading] = useState<boolean>(false);

    const saveHandler: Function = async () => {


        // const response = await request('');
    }

    return (
        <div className="templateBlock">
            <div className="content">
                <div className="parameterSetting">
                    <div className="options">
                        <div className="text">Отклик прошёл собеседование</div>
                        <input type="checkbox" name = "feedbackSuccess" className="checkBoxStatus"/>

                        <div className="text">Не прошёл собеседование</div>
                        <input type="checkbox" name = "feedback" className="checkBoxStatus"/>

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
                    <ButtonComponent text="Сохранить" className = {isLoading ? 'disabled' : ''}/>
                </div>
            </div>
        </div>
    );
};

export default MessagesTemplates;