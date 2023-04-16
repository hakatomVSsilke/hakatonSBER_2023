import React from 'react';
import InputTextComponent from "../../components/elements/inputs/InputText.component";
import InputDateComponent from "../../components/elements/inputs/inputDate.component";
import ButtonComponent from "../../components/elements/button/button.component";
import  "./filter.style.css";

const Filter: React.FunctionComponent = () => {
    return (
        <div className="filter-modal-block">
            <div className="filter-inputs">
                <label>
                    ФИО:
                    <InputTextComponent name="name" className="blockModalFilter"/>
                </label>

                <label>
                    Вакансия :

                    <InputTextComponent name="vacancy" className="blockModalFilter"/>
                </label>

                <label>
                    Почта :
                    <InputDateComponent name="feedback_date" className="blockModalFilter"/>
                </label>


                <label>
                    Номер телефона :
                    <InputDateComponent name="feedback_date" className="blockModalFilter"/>
                </label>

                <label>
                    Рейтинг :
                    <InputDateComponent name="feedback_date" className="blockModalFilter"/>
                </label>
            </div>

            <ButtonComponent text={'Фильтровать'}/>
        </div>
    );
};

export default Filter;