import React, {useRef} from "react";
import {FeedbackItemInterface} from "../../../interfaces/feedbackItem.interface";

const FeedbackComponent: React.FunctionComponent<FeedbackItemInterface> = ({item = {}}) => {
    const id = item.id;
    const name = item.name;
    const vacancy = item.vacancy;
    const responseDate = item.response_date;
    const className = item.className || '';

    return (
        <div
            className = "element-wrapper"
            draggable={true}
        >
            <div
                id = {'el_' + id}
                className = {"feedback-block " + className}
                key={id}
            >
                <div className="top-data">
                    <span>{name}</span>

                    <span>{responseDate}</span>
                </div>

                <div className = "vacancy">
                   {vacancy}
                </div>
            </div>


            <div
                className={'wrapper'}
                data-id = {'el_' + id}
                data-position = "bottom"
            >
            </div>
        </div>
    );
}

export default FeedbackComponent;