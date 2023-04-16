import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import IconComponent from "../icons/icon.component";

import './navSection.style.css';

const navSection: React.FunctionComponent = () => {
    let activeElement = '';

    const changeSectionHandler = (sectionName: string) => {
    }

    return (
        <div id = "nav_section-block">
            <div id = "nav_section_buttons-block">
                <Link onClick={() => changeSectionHandler('/feedback/pipeline_view')} data-title = {'Отклики'} to='/feedback/pipeline_view' className = {activeElement === '/feedback/pipeline_view' ? 'active' : ''}>
                    <IconComponent name = "applicants" className = "applicants"/>
                </Link>
                <Link  onClick={() => changeSectionHandler('/tasks')} data-title = {'Задачи'} to='/tasks' className = {activeElement === '/tasks' ? 'active' : ''}>
                    <IconComponent name = "tasks"/>
                </Link>
                <Link onClick={() => changeSectionHandler('/departments')} data-title = {'Отделы'} to='/departments' className = {activeElement === '/departments' ? 'active' : ''}>
                    <IconComponent name = "departments"/>
                </Link>
                <Link onClick={() => changeSectionHandler('/applicants')} data-title = {'Соискатели'} to='/applicants' className = {activeElement === '/applicants' ? 'active' : ''}>
                    <IconComponent name = "users"/>
                </Link>
                <Link onClick={() => changeSectionHandler('/settings')} data-title = {'Настройки'} to='/settings' className = {activeElement === '/settings/settings.section' ? 'active' : ''}>
                    <IconComponent name = "settings" className = "settings"/>
                </Link>
            </div>
        </div>
    );
}

export default navSection;