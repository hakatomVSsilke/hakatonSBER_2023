import React from "react";
import {TitleComponent} from "../../../components/elements/title/title.component";
import ButtonComponent from "../../../components/elements/button/button.component";
import ModalWrapperComponent from "../../../components/modalWrapper/modalWrapper.component";
import MessageFromDepartmentModal from "../modals/messageFromDepartment.modal";

const DepartmentComponent = ({item, setModal}: any) => {
    const name = item.name || '';
    const empCountMax = item.empCountMax || 0;
    const empCountNow = item.empCountNow || 0;
    const spanClass = empCountNow < empCountMax ? 'red' : '';

    return (
        <div className="department">
            <TitleComponent text={name}/>
            <div className="info">
                <span>Количество менеджеров <span className = {spanClass}>{empCountNow}/{empCountMax}</span></span>

                <ButtonComponent text="Сообщение" className="btn" onClick={() => setModal(<ModalWrapperComponent component = {<MessageFromDepartmentModal setState = {setModal} />} setState = {setModal}/>)}/>
            </div>
        </div>
    );
}

export default DepartmentComponent;