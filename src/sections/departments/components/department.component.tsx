import React from "react";
import {TitleComponent} from "../../../components/elements/title/title.component";
import {DepartmentComponentInterface} from "../../../interfaces/departmentComponent.interface";
import {Link} from "react-router-dom";

const DepartmentComponent: React.FunctionComponent<DepartmentComponentInterface> = ({item, setModal}) => {
    const name = item.name || '';

    return (
        <div className="department">
            <Link to={'chat/' + item.id} className="title-component">
                <TitleComponent text={name}/>
                <div className="info"></div>
            </Link>
        </div>
    );
}

export default DepartmentComponent;