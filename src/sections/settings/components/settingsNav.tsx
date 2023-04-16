import React from 'react';
import {Link, Outlet, Route} from "react-router-dom";
import ButtonComponent from "../../../components/elements/button/button.component";
import "./settingsNav.style.css";

const SettingsNav : React.FunctionComponent = () => {
    return (
        <div>
            <div className="blockSettings">
                <div className="buttonBlockSettings">
                    <Link to={"telegramSettings"}>
                        <ButtonComponent text="Телеграмм" className="btnSettings bg-blue"/>
                    </Link>
                    <Link to={"messagesTemplates"}>
                        <ButtonComponent text="Шаблонизатор сообщения" className="btnSettings bg-green"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SettingsNav;