import React from "react";

import './navSection.style.css';
import {Link} from "react-router-dom";
import IconComponent from "../icons/icon.component";

const navSection: React.FunctionComponent = () => {
    const pathName = window.location.pathname;

    return (
        <div id = "nav_section-block">
            <div id = "nav_section_buttons-block">
                <Link data-title = {'Отклики'} to='/feedback/pipeline_view' className = {pathName === '/feedback/pipeline_view' ? 'active' : ''}>
                    <IconComponent name = "applicants"/>

                    {/*Отклики*/}
                </Link>
                <Link data-title = {'Задачи'} to='tasks' className = {pathName === '/tasks' ? 'active' : ''}>
                    <IconComponent name = "tasks" />

                    {/*Задачи*/}
                </Link>
                <Link data-title = {'Отделы'} to='/departments' className = {pathName === '/departments' ? 'active' : ''}>
                    <IconComponent name = "departments" />

                    {/*Отделы*/}
                </Link>
                <Link data-title = {'Соискатели'} to='applicants' className = {pathName === '/applicants' ? 'active' : ''}>
                    <IconComponent name = "users" />

                    {/*Соискатели*/}
                </Link>


                <Link data-title = {'Пользователи'} to='/users' className={pathName === '/users' ? 'active' : ''}>
                    <IconComponent name = "human"/>


                    {/*Пользователи*/}
                </Link>
            </div>
        </div>
    );
}

export default navSection;