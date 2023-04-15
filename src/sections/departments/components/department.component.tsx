import React from "react";
import {TitleComponent} from "../../../components/elements/title/title.component";
import ButtonComponent from "../../../components/elements/button/button.component";
import ModalWrapperComponent from "../../../components/modalWrapper/modalWrapper.component";
import MessageFromDepartmentModal from "../modals/messageFromDepartment.modal";
import {DepartmentComponentInterface} from "../../../interfaces/departmentComponent.interface";

const DepartmentComponent: React.FunctionComponent<DepartmentComponentInterface> = ({item, setModal}) => {
    const name = item.name || '';

    return (
        <div className="department">
            <TitleComponent text={name}/>

            <div className="info">
                <ButtonComponent text="Сообщение" className="btn" onClick={() => setModal(<ModalWrapperComponent component = {<MessageFromDepartmentModal setState = {setModal} />} setState = {setModal}/>)}/>
            </div>
        </div>
    );
}

export default DepartmentComponent;