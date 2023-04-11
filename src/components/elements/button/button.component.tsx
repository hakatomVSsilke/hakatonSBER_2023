import React from "react";

import './button.style.css';

const ButtonComponent = ({text = '', className = '', onClick = null}: any) => {
    return (
        <button className = {'simpleButton ' + className} onClick={() => onClick}>
            {text}
        </button>
    );
}

export default ButtonComponent;