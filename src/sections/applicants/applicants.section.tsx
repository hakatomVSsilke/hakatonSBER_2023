import React from 'react';
import "./applicantsStyle.css";
import TableListComponent from "../../components/tableList/tableList.component";
import HeaderApplicants from "./component/headerApplicants";


const Applicants : React.FunctionComponent = () => {
    const thead = [{name: ""}, {name: 'ФИО'}, {name: 'Вакансия'}, {name: 'Почта'}, {name: 'Телефон'}, {name: "Рейтинг"}];
    const tbody = [
        [{name: 'Тестовый тест тестович', href: "1"}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}, {name: "4,6"}],
        [{name: 'Тестовый тест тестович', href: "2"}, {name: 'Должность бизнес аналитика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}, {name: "4,6"}],
        [{name: 'Тестовый тест тестович', href: "3"}, {name: 'Должность back-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}, {name: "4,6"}],
        [{name: 'Тестовый тест тестович', href: "4"}, {name: 'Должность бухгалтера'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}, {name: "4,6"}],
        [{name: 'Тестовый тест тестович', href: "5"}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}, {name: "4,6"}],
        [{name: 'Тестовый тест тестович', href: "6"}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}, {name: "4,6"}],
        [{name: 'Тестовый тест тестович', href: "7"}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}, {name: "4,6"}],
        [{name: 'Тестовый тест тестович', href: "8"}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}, {name: "4,6"}],
        [{name: 'Тестовый тест тестович', href: "9"}, {name: 'Должность front-end разработчика'}, {name: 'test@test.ru'}, {name: '+7-999-666-99-66'}, {name: "4,6"}],
    ];

    return (
        <div id="containerBlock">
            <HeaderApplicants/>

            <TableListComponent theadElements={thead} tbodyElements={tbody}/>
        </div>
    );
};

export default Applicants;