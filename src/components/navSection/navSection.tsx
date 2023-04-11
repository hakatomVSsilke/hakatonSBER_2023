import React from "react";

import './navSection.style.css';
import {Link} from "react-router-dom";
import IconComponent from "../icons/icon.component";

const navSection: React.FunctionComponent = () => {
    const pathName = window.location.pathname;

    return (
        <div id = "nav_section-block">
            <div id = "nav_section_buttons-block">
                <Link to='/feedback/pipeline_view' className = {pathName === '/feedback/pipeline_view' ? 'active' : ''}>
                    <IconComponent name = "applicants"/>

                    Отклики
                </Link>
                <Link to='' className = {pathName === '/tasks' ? 'active' : ''}>
                    <IconComponent name = "tasks" />

                    Задачи
                </Link>
                <Link to='/departments' className = {pathName === '/departments' ? 'active' : ''}>
                    <IconComponent name = "departments" />

                    Отделы
                </Link>
                <Link to='' className = {pathName === '/human/pipeline_view' ? 'active' : ''}>
                    <IconComponent name = "human" />

                    Соискатели
                </Link>
            </div>
        </div>
    );
}

export default navSection;