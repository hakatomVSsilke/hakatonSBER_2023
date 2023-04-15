import React from 'react';
import "./usersStyle.css"
import TableListComponent from "../../components/tableList/tableList.component";
import ChatBlock from "./component/chatBlock";


const Users = () => {
    const thead = [{name: 'ФИО'}, {name: 'Вакансия'}, {name: 'Почта'}, {name: 'Телефон'}];
    const tbody = [
        [{name: 'Тестовый тест тестович'}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}],
        [{name: 'Тестовый тест тестович'}, {name: 'Должность бизнес аналитика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}],
        [{name: 'Тестовый тест тестович'}, {name: 'Должность back-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}],
        [{name: 'Тестовый тест тестович'}, {name: 'Должность бухгалтера'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}],
        [{name: 'Тестовый тест тестович'}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}],
        [{name: 'Тестовый тест тестович'}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}],
        [{name: 'Тестовый тест тестович'}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}],
        [{name: 'Тестовый тест тестович'}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}],
        [{name: 'Тестовый тест тестович'}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}],
    ];

    return (
        <>
           <TableListComponent theadElements = {thead} tbodyElements = {tbody}/>
        </>
    );
};

export default Users;