import React from 'react';
import "./usersStyle.css"
import {TitleComponent} from "../../components/elements/title/title.component";
import ButtonComponent from "../../components/elements/button/button.component";


const Users = () => {

    return (
        <div className="container">
            <div id = "header">
                <TitleComponent text = 'Сотрудники'/>

                <ButtonComponent text = 'Удалить' />
            </div>

            <div className="blockUsers">
                <table className="tableInfo">
                    <tr>
                        <th>ФИО</th>
                        <th>Должность</th>
                        <th>Роль</th>
                        <th>Почта</th>
                        <th>Номер</th>
                    </tr>

                    <tr>
                        <td>Игорь Гроховский Иванович</td>
                        <td>Петушара</td>
                        <td>ФронЕНД</td>
                        <td>gdfgdf@mail.ru</td>
                        <td>+794314324</td>
                        <td><input type="checkbox"/></td>
                    </tr>


                    <tr>
                        <td>Владимир Литвинов</td>
                        <td>Хуксосина</td>
                        <td>АдминСос</td>
                        <td>gddf@mail.ru</td>
                        <td>+794314324</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Users;