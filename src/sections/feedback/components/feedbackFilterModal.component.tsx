import React from "react";
import InputTextComponent from "../../../components/elements/inputs/InputText.component";
import InputDateComponent from "../../../components/elements/inputs/inputDate.component";
import ButtonComponent from "../../../components/elements/button/button.component";

import '../../../styles/fitlerBlock.style.css';

const FeedbackFilterModalComponent: React.FunctionComponent = () => {
    return (
        <div className = "filter-modal-block">
            <div className = "filter-inputs">
                <label>
                    ФИО:
                    <InputTextComponent name = "name" />
                </label>

                <label>
                    Должность :

                    <InputTextComponent name = "vacancy" />
                </label>

                <label>
                    Дата отклика
                    <InputDateComponent name = "feedback_date" />
                </label>
            </div>

            <ButtonComponent text={'Фильтровать'} />
        </div>
    );
}

export default FeedbackFilterModalComponent;