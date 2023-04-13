import React from 'react';
import "./cardInfoUser.style.css";

const CardInfoUser = () => {

    const head = [
        {name: "Тест Фёдорович Генадий", id: 1}
    ];

    const info = [
        {position: "Front-end", age: 20, phone: "+7943424", email: "zrerw@mail.ru"}
    ];

    return (
        <div id="container">
            <div id="blockInfoUser">
                <div id="head">
                    {head.map(heads =>
                        <>
                            <span>ФИО: {heads.name}</span>
                            <span>Номер анкеты: {heads.id}</span>
                        </>
                    )}
                </div>

                <div id="information">
                    {info.map(info =>
                        <>
                            <span>Вакансия: {info.position}</span>
                            <span>Возраст: {info.age}</span>
                            <span>Телефон: {info.phone}</span>
                            <span>Почта: {info.email}</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardInfoUser;