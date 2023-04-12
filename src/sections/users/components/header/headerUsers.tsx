import React from 'react';
import {TitleComponent} from "../../../../components/elements/title/title.component";
import ButtonComponent from "../../../../components/elements/button/button.component";
import "./headerUsersStyle.css";

const HeaderUsers = () => {
    return (
        <div id="header">
            <TitleComponent text='Сотрудники'/>

            <ButtonComponent text='Удалить'/>
        </div>
    );
};

export default HeaderUsers;