import React from 'react';
import "./applicantsStyle.css";
import TableListComponent from "../../components/tableList/tableList.component";
import HeaderApplicants from "./component/headerApplicants";


const Applicants = () => {
    const thead = [{name: ""}, {name: 'ФИО'}, {name: 'Вакансия'}, {name: 'Почта'}, {name: 'Телефон'}];
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
        <div id="containerBlock">
            <HeaderApplicants/>
            <TableListComponent theadElements={thead} tbodyElements={tbody}/>
        </div>
    );
};

export default Applicants;