import React, {useEffect} from "react";
import {TitleComponent} from "../elements/title/title.component";
import FeedbackComponent from "./feedback.component";

const StatusColumnComponent = ({name, feedbacks}: any) => {
    return (
        <div className = "status_column-block">
            <div className='status_column-header'>
                <TitleComponent text = {name} />
            </div>

            <div className='status_column-list'>
                {
                    feedbacks.map((item: any) => {
                        return <FeedbackComponent item = {item} statusName = {name} />
                    })
                }
            </div>
        </div>
    );
}

export default StatusColumnComponent;