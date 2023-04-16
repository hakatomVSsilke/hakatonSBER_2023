import React, {useState} from 'react';
import "./messagesTemplates.style.css";
import ButtonComponent from "../../../components/elements/button/button.component";
import {useHttp} from "../../../hooks/useHTTP";
import ModalWrapperComponent from "../../../components/modalWrapper/modalWrapper.component";
import CreateTestComponent from "./createTest.component";

const MessagesTemplates: React.FunctionComponent = () => {
    const {request} = useHttp();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [filterModal, setFilterModal] = useState<React.ReactElement | null>(null);

    const setModalHandler = (): void => {
        setFilterModal(<ModalWrapperComponent component={
            <>
                <CreateTestComponent/>
                <ButtonComponent text = "сохранить тест" onClick={() => setFilterModal(null)}/>
            </>
        } setState={setFilterModal}/>)
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

                    <div className="message">
                        <ButtonComponent text = 'тест' onClick={setModalHandler}/>
                        <ButtonComponent text = 'тест' onClick={setModalHandler}/>
                        <ButtonComponent text = 'тест' onClick={setModalHandler}/>
                        <ButtonComponent text = 'тест' onClick={setModalHandler}/>
                    </div>
                </div>
                <div className="buttonBlock">
                    <ButtonComponent text="Сохранить" className = {isLoading ? 'disabled' : ''}/>
                </div>
            </div>

            {filterModal}
        </div>
    );
};

export default MessagesTemplates;