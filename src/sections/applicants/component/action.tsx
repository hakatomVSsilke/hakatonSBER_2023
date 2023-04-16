import React from 'react';
import {TitleComponent} from "../../../components/elements/title/title.component";
import ButtonComponent from "../../../components/elements/button/button.component";
import "./action.style.css";

const Action : React.FunctionComponent = () => {
    return (
        <div id="content">
            <TitleComponent text="Применить действие"/>

            <div className="buttonBlock">
                <ButtonComponent text="Удалить"/>
                <ButtonComponent text="Рассылка"/>
            </div>
        </div>
    );
};

export default Action;