import React from 'react';
import "./cardUser.style.css";
import ChatMessage from "./component/chatMessage";
import ButtonComponent from "../elements/button/button.component";

const CardUser = () => {

    const head = [
        {name: "Тест Фёдорович Генадий", id: "1"}
    ];

    const info = [
        {position: "Front-end", age: 20, phone: "+7943424", email: "zrerw@mail.ru"}
    ];

    return (
        <div className="container">
            <div id="blockInfoUser">
                <div id="head">
                    {head.map(heads =>
                        <>
                            <span>ФИО: {heads.name}</span>
                            <span>Номер анкеты: {heads.id}</span>
                        </>
                    )}
                    <div className="blockBtn">
                        <ButtonComponent text="Резюме" className="btnSummary"/>
                    </div>
                </div>
                <div id="information">
                    {info.map(info =>
                        <>
                            <div className="text">Вакансия: </div> <span className="textSpan">{info.position}</span>
                            <div className="text">Возраст: </div> <span className="textSpan">{info.age}</span>
                            <div className="text">Телефон: </div> <span className="textSpan">{info.phone}</span>
                            <div className="text">Почта: </div> <span className="textSpan">{info.email}</span>
                        </>
                    )}
                </div>
            </div>
            <ChatMessage/>
        </div>
    );
};

export default CardUser;