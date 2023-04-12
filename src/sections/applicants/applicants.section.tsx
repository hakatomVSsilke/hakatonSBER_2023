import React from 'react';
import {TitleComponent} from "../../components/elements/title/title.component";
import ButtonComponent from "../../components/elements/button/button.component";
import "./applicantsStyle.css";


const Applicants = () => {
    return (
        <div id="container">
            <div id="header">
                <TitleComponent text='Соискатели'/>

                <ButtonComponent text='Удалить'/>
            </div>

            <ul className="responsive-table">
                <li className="table-header">
                    <div className="col col-1">ФИО</div>
                    <div className="col col-2">Должность по вакансии</div>
                    <div className="col col-3">Почта</div>
                    <div className="col col-4">Номер</div>
                </li>
                <li className="table-row">
                    <div className="col col-1" data-label="Job Id">Гроховский Игорь</div>
                    <div className="col col-2" data-label="Customer Name">Петушара</div>
                    <div className="col col-3" data-label="Amount">аываывываыва</div>
                    <div className="col col-4" data-label="Payment Status">423432432343</div>
                </li>

                <li className="table-row">
                    <div className="col col-1" data-label="Job Id">Владимир Литвинов</div>
                    <div className="col col-2" data-label="Customer Name">Хуесос</div>
                    <div className="col col-3" data-label="Amount">аываывываыва</div>
                    <div className="col col-4" data-label="Payment Status">423432432343</div>
                </li>
            </ul>

        </div>
    );
};

export default Applicants;