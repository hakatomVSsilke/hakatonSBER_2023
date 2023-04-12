import React from "react";

import './title.style.css';

export const TitleComponent = ({text, level = "3"}: any) => {
    return (
        <h3 className = "title-component" data-level = {level}>
            {text}
        </h3>
    );
}