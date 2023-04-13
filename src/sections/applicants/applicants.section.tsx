import React from 'react';
import {TitleComponent} from "../../components/elements/title/title.component";
import ButtonComponent from "../../components/elements/button/button.component";
import "./applicantsStyle.css";
import TableListComponent from "../../components/tableList/tableList.component";


const Applicants = () => {
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
        <div id="container">
            <div id="header">
                <TitleComponent text='Соискатели'/>

                <ButtonComponent text='Удалить'/>
            </div>

            <TableListComponent theadElements = {thead} tbodyElements = {tbody}/>
        </div>
    );
};

export default Applicants;