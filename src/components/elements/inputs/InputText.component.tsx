import React from "react";

import './input.style.css';

const InputTextComponent = ({name, value, className, id, onInput, onChange}: any) => {
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