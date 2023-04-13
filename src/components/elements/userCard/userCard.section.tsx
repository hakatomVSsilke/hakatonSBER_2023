import React, {useState} from 'react';

const UserCard = ({text = "", className = ""}) => {

    const [data, setData] = useState([
        {id: 1,fio: "Пётр Петрович Петровович", age: 20, position: "Петух", email: "zerorfd@rerwe.ru", phone: "+7843412334"},
    ])

    return (
        <div id="container">
            <div id="userCard" className={"simple" + className}>
                <h1>{text}</h1>
                <p>Вакинсия: </p>
                <div className="info">
                    <p>Информация: </p>

                    {data.map(data  =>
                        <>
                            <span>ФИО: {data.fio}</span>
                            <span>Возраст: {data.age}</span>
                            <span>Должность: {data.position}</span>
                            <span>Почта: {data.email}</span>
                            <span>Номер телефона: {data.phone}</span>
                        </>
                    )}
                </div>

                <div className="content">
                    <div className="synopsis">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;