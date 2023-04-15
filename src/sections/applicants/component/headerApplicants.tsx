import React from 'react';
import {TitleComponent} from "../../../components/elements/title/title.component";
import ButtonComponent from "../../../components/elements/button/button.component";
import "./headerApplicants.style.css";

const HeaderApplicants = () => {

    const visibility = () => {
        console.log(1);
    }


    return (
        <>
            <div className="header-applicants">
                <TitleComponent text="Соискатели"/>
                <div className="filter">Фильтер</div>
                <ButtonComponent text="Массовое действие" onClick={visibility}/>
            </div>
        </>
    );
};

export default HeaderApplicants;