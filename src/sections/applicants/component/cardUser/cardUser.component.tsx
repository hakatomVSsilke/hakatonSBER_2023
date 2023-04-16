import React, {useState} from 'react';
import "./cardUser.style.css";
import ChatMessage from "./component/chatMessage";
import ButtonComponent from "../../../../components/elements/button/button.component";
import {Params, useParams} from "react-router-dom";
import {TitleComponent} from "../../../../components/elements/title/title.component";
import ModalWrapperComponent from "../../../../components/modalWrapper/modalWrapper.component";
import CreateTestComponent from "../../../settings/components/createTest.component";

const CardUserComponent: React.FunctionComponent = () => {
    const params = useParams<{ id: string }>();
    const id: string | undefined = params.id;

    const [modal, setModal] = useState<JSX.Element | null>(null);

    const setModalHandler = (): void => {
        setModal(<ModalWrapperComponent component={<CreateTestComponent/>} setState={setModal}/>)
    }

    return (
        <div className="container">
            <div id="blockInfoUser">
                <div id="head">
                    <span>ФИО: {}</span>
                    <span>Номер анкеты: {id}</span>
                    <div className="blockBtn">
                        <ButtonComponent text="Резюме" className="btnSummary"/>
                    </div>
                </div>

                <div id="information">
                    <div className="text">Вакансия:</div>
                    <span className="textSpan">{}</span>
                    <div className="text">Возраст:</div>
                    <span className="textSpan">{}</span>
                    <div className="text">Телефон:</div>
                    <span className="textSpan">{}</span>
                    <div className="text">Почта:</div>
                    <span className="textSpan">{}</span>
                    <div className="text">Рейтинг:</div>
                    <span className="textSpan">{}</span>
                </div>

                <div className="task-block">
                    <ButtonComponent text="Тест" onClick={setModalHandler}/>
                </div>

                {modal}

            </div>
            <ChatMessage/>
        </div>
    );
};

export default CardUserComponent;