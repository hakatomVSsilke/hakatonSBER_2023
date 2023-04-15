import React from "react";

import './button.style.css';

interface ButtonComponentProps
{
    text?: string;

    className?: string;

    onClick?: any;
}

const ButtonComponent: React.FunctionComponent<ButtonComponentProps> = ({text = '', className = '', onClick = null}) => {
    return (
        <button className = {'simpleButton ' + className} onClick={onClick}>
            {text}
        </button>
    );
}

export default ButtonComponent;