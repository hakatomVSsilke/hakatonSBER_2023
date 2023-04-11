import React from "react";

import './title.style.css';

export const TitleComponent = ({text}: any) => {
    return (
        <h3 className = "title-component">
            {text}
        </h3>
    );
}