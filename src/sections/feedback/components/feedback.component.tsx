import React, {useRef} from "react";

const FeedbackComponent = ({item}: any) => {
    const itemId = item.id;
    const itemName = item.name;
    const className = item.className || '';
    const statusName = item.statusName || '';

    return (
        <div
            className = "element-wrapper"
            draggable={true}
        >
            <div
                id = {'el_' + itemId}
                className = {"feedback-block " + className}
                key={itemId}
            >
                <div className="top-data">
                    <span>{itemName}</span>

                    <span>{item.response_date}</span>
                </div>

                <div className = "vacancy">
                   {item.vacancy}
                </div>
            </div>


            <div
                className={'wrapper'}
                data-id = {'el_' + itemId}
                data-position = "bottom"
            >
            </div>

        </div>
    );
}

export default FeedbackComponent;