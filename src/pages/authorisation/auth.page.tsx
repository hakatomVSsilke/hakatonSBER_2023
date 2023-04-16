import React, {useState} from "react";
import {TitleComponent} from "../../components/elements/title/title.component";
import InputTextComponent from "../../components/elements/inputs/InputText.component";
import ButtonComponent from "../../components/elements/button/button.component";
import ResetPasswordForm from "./resetPassword.form";
import ModalWrapperComponent from "../../components/modalWrapper/modalWrapper.component";

import '../../styles/authPage.style.css';
import {AuthFormInterface} from "../../interfaces/authForm.interface";
import {useHttp} from "../../hooks/useHTTP";

const AuthPage: React.FunctionComponent = () => {
    const {request} = useHttp();
    const [resetModal, setResetModal] = useState<JSX.Element | null>(null);
    const [form, setFormData] = useState<AuthFormInterface>({username: '', password: ''});

    const setModalHandler = () => {
        setResetModal(<ModalWrapperComponent setState={setResetModal} component={<ResetPasswordForm/>}/>);
    };

    const setFormDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filedName: string | undefined = e.target.name;
        const value: string | undefined = e.target.value;

        if (filedName === undefined || value === undefined) {
            return;
        }

        setFormData((prev: any) => {
            return {...prev, [filedName]: value}
        });
    }

    const loginHandler = async () => {
        let response = await request('/auth/register', 'POST', {}, {'Content-Type': 'application/json'}, form);

        if (response.message === 'Okay' || response.statusCode == 405) {
            response = await request('/auth/login', 'POST', {}, {'Content-Type': 'application/json'}, form);

            localStorage.setItem('token', response.token);

            window.location.pathname = '/';
        }
    }

    return (
        <div id="auth-container-body">
            <div id="auth-container">
                <TitleComponent text="Авторизация"/>

                <form>
                    <label>
                        Почта:
                        <InputTextComponent onInput={(e: any) => setFormDataHandler(e)} value={form.username} name="username" id="email"
                                            className="full center"/>
                    </label>

                    <label>
                        Пароль:
                        <InputTextComponent onInput={(e: any) => setFormDataHandler(e)} value={form.password} name="password"
                                            id="password" className="full center"/>
                    </label>
                </form>

                <ButtonComponent text="авторизоваться" className="buttonAut" onClick={loginHandler}/>

                <div className="footnote" onClick={setModalHandler}>
                    Вы забыли пароль?
                </div>
            </div>

            {resetModal}
        </div>
    );
}

export default AuthPage;