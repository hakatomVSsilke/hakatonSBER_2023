import React, {useState} from 'react';
import {TitleComponent} from "../../../components/elements/title/title.component";
import ButtonComponent from "../../../components/elements/button/button.component";
import "./headerApplicants.style.css";
import ModalWrapperComponent from "../../../components/modalWrapper/modalWrapper.component";
import Action from "./action";
import Filter from "../filter";

const HeaderApplicants: React.FunctionComponent = () => {

    const [modal, setModal] = useState<JSX.Element | null>(null);
    const handleClick = () => {
        const btnElement: HTMLButtonElement | null = document.querySelector(".visionBtn");
        const inputList: NodeListOf<HTMLInputElement> = document.querySelectorAll(".checkBox");

        if (btnElement === null) {
            return;
        }
        btnElement.style.visibility = "hidden";
        let flag: boolean = false;
        console.log(1);
        inputList.forEach((item: HTMLInputElement): void => {
            if (flag) {
                return;
            }

            flag = item.checked;
        })
        if (flag) {
            btnElement.style.visibility = "visible";
        }

        setModal(<ModalWrapperComponent component={<Action/>} setState={setModal}/>);
    }

    const [modalFilter, setModalFilter] = useState<JSX.Element | null>(null);

    const setModalHandler = () => {
        setModalFilter(<ModalWrapperComponent component={<Filter/>} setState={setModalFilter}/>)
    }


    return (
        <>
            <div className="header-applicants">
                <TitleComponent text="Соискатели"/>

                <ButtonComponent text="Фильтр" onClick={setModalHandler}/>

                <ButtonComponent text="Массовое действие" onClick={handleClick} className="visionBtn"/>
            </div>

            {modal}
            {modalFilter}
        </>
    );
};

export default HeaderApplicants;