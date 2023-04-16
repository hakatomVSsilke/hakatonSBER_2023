import React from "react";

import './input.style.css';

interface InputTextComponentProps
{
    name?: string;

    value?: string;

    className?: string;

    id?: string;

    onInput?: any;

    onChange?: any;
}

const InputTextComponent: React.FunctionComponent<InputTextComponentProps> = ({name = '', value = '', className = '', id = '', onInput = () => {}, onChange = () => {}}: any) => {
    return (
        <>
            <input
                name = {name}
                value = {value}
                className={'form-control ' + className}
                id = {id}
                onInput={onInput}
                onChange={onChange}
            />
        </>
   )
}

export default InputTextComponent;