import React from 'react';
import SettingsNav from "./components/settingsNav";
import "./settings.style.css";
import {Outlet} from "react-router-dom";

const Settings: React.FunctionComponent = () => {
    return (
        <div className="container">
            <SettingsNav/>
            <Outlet/>
        </div>
    );
};

export default Settings;