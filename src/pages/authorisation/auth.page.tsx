import React, {useState} from "react";
import {TitleComponent} from "../../components/elements/title/title.component";
import InputTextComponent from "../../components/elements/inputs/InputText.component";
import ButtonComponent from "../../components/elements/button/button.component";
import ResetPasswordForm from "./resetPassword.form";
import ModalWrapperComponent from "../../components/modalWrapper/modalWrapper.component";

import '../../styles/authPage.style.css';
import {useDispatch} from "react-redux";
import {login, logout, getUserId} from "../../slices/auth.slice";

const AuthPage = () => {
    const dispatch = useDispatch();
    const [resetModal, setResetModal]: any = useState(null);
    const [form, setFormData]: any = useState({});
    const setModalHandler = () => {
          setResetModal(<ModalWrapperComponent setState = {setResetModal} component={<ResetPasswordForm/>}/>);
    };

    const setFormDataHandler = (e: any) => {
        setFormData((prev: any) => {
            return {...prev, [e.target.name]: e.target.value}
        });

        console.log(form)
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

                <ButtonComponent text = "авторизоваться" onClick = {() => dispatch(login(form))}/>

                <div className = "footnote" onClick={setModalHandler}>
                    Вы забыли пароль?
                </div>
            </div>

            {resetModal}
        </div>
    );
}

export default AuthPage;