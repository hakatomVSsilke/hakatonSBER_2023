import React from "react";
import ButtonComponent from "../../components/elements/button/button.component";
import InputTextComponent from "../../components/elements/inputs/InputText.component";

import './resetPassword.style.css';

const ResetPasswordForm = () => {
    return (
        <div id = "reset-password-form">
            <p>
                Введите вашу почту для сброса пароля
            </p>

            <InputTextComponent name = "email" id = "email" className = "full center"/>

            <p>
                <ButtonComponent text = "Отправить" />
            </p>
        </div>
    );
}

export default ResetPasswordForm;