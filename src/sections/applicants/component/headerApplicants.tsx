import React, {useState} from 'react';
import {TitleComponent} from "../../../components/elements/title/title.component";
import ButtonComponent from "../../../components/elements/button/button.component";
import "./headerApplicants.style.css";
import ModalWrapperComponent from "../../../components/modalWrapper/modalWrapper.component";
import Action from "./action";

const HeaderApplicants = () => {

    const [modal, setModal] = useState<JSX.Element | null>(null);
    const handleClick = () => {
        const inputList: NodeListOf<HTMLInputElement> = document.querySelectorAll(".checkBox");

        inputList.forEach((item: HTMLInputElement): void => {
            if (item.checked) {
                setModal(<ModalWrapperComponent component={<Action/>} setState={setModal}/>)
            }
        })
    }


    return (
        <>
            <div className="header-applicants">
                <TitleComponent text="Соискатели"/>
                <div className="filter">Фильтр</div>

                <ButtonComponent text="Массовое действие" onClick={handleClick}/>
            </div>

            {modal}
        </>
    );
};

export default HeaderApplicants;