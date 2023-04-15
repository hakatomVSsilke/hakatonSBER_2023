import React from 'react';
import ButtonComponent from "../../components/elements/button/button.component";
import "./settings.style.css";

const Settings = () => {
    return (
        <div className="container">
            <div className="blockSettings">
                <div className="buttonBlockSettings">
                    <ButtonComponent text="TEST" className="btnSettings"/>
                    <ButtonComponent text="TEST2" className="btnSettings"/>
                    <ButtonComponent text="TEST3" className="btnSettings"/>
                </div>
            </div>
        </div>
    );
};

export default Settings;