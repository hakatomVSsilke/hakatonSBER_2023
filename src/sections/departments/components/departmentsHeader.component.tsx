import React from "react";
import {TitleComponent} from "../../../components/elements/title/title.component";

const DepartmentsHeaderComponent: React.FunctionComponent = () => {
    return (
        <div className='section-header'>
            <TitleComponent text = "Отделы" />
        </div>
    );
}

export default DepartmentsHeaderComponent;