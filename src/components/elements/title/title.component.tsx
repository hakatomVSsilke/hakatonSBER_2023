import React, {FunctionComponent} from "react";

import './title.style.css';

interface TitleComponentProps
{
    text: string;

    level?: string;
}

export const TitleComponent: FunctionComponent<TitleComponentProps> = ({text, level = "3"}: any) => {
    return (
        <h3 className = 'title-component' data-level = {level}>
            {text}
        </h3>
    );
}