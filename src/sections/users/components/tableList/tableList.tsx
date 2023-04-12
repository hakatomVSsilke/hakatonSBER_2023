import React from 'react';
import "./tableListStyle.css";

const TableList = () => {
    return (
        <div className="container">
            <div className="table">
                <div className="table-header">
                    <span>ФИО</span>
                    <span>Должность</span>
                    <span>Роль</span>
                    <span>Почта</span>
                    <span>Номер</span>
                </div>

                <div className="table-row">
                    <span>Гроховский</span>
                    <span>Хуесос</span>
                    <span>Майнкрафтер</span>
                    <span>grokOg2006@mail.ru</span>
                    <span>+7981745506</span>
                </div>
            </div>
        </div>
    );
};

export default TableList;