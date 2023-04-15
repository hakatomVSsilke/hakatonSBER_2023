import React, {useState} from "react";
import {TitleComponent} from "../../components/elements/title/title.component";
import InputTextComponent from "../../components/elements/inputs/InputText.component";
import ButtonComponent from "../../components/elements/button/button.component";
import ResetPasswordForm from "./resetPassword.form";
import ModalWrapperComponent from "../../components/modalWrapper/modalWrapper.component";

import '../../styles/authPage.style.css';
import {AuthFormInterface} from "../../interfaces/authForm.interface";
const AuthPage: React.FunctionComponent = () => {
    const [resetModal, setResetModal] = useState<JSX.Element | null>(null);
    const [form, setFormData]         = useState<AuthFormInterface>({email: '', password: ''});

    const setModalHandler = () => {
        setResetModal(<ModalWrapperComponent setState={setResetModal} component={<ResetPasswordForm/>}/>);
    };

    const setFormDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filedName: string | undefined = e.target.name;
        const value: string | undefined     = e.target.value;

        if (filedName === undefined || value === undefined) {
            return;
        }

        setFormData((prev: any) => {
            return {...prev, [filedName]: value}
        });
    }

    return (
        <div id = "auth-container-body">
            <div id="auth-container">
                <TitleComponent text = "Авторизация" />

                <p>
                    <label>
                        Ваша почта:
                        <InputTextComponent onInput = {(e: any) => setFormDataHandler(e)} name = "email" id = "email" className = "full center"/>
                    </label>
                </p>

                <p>
                    <label>
                        Ваш пароль
                        <InputTextComponent onInput = {(e: any) => setFormDataHandler(e)} name = "password" id = "password" className = "full center"/>
                    </label>
                </p>

                <ButtonComponent text = "авторизоваться" onClick = {() => {}}/>

                <div className = "footnote" onClick={setModalHandler}>
                    Вы забыли пароль?
                </div>
            </div>

            {resetModal}
        </div>
    );
}

export default AuthPage;