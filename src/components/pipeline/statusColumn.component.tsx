import React from "react";
import {TitleComponent} from "../elements/title/title.component";
import FeedbackComponent from "./feedback.component";

const StatusColumnComponent = ({name, feedbacks}: any) => {
    return (
        <div className = "status_column-block">
            <div className='status_column-header'>
                <TitleComponent text = {name} />
            </div>

            <div className='status_column-list'>
                <FeedbackComponent key = {'empty'} item = {{name: 'empty'}} statusName = {name}/>

                {
                    feedbacks.map((item: any) => {
                        return <FeedbackComponent key = {item.name} item = {item} statusName = {name} />
                    })
                }
            </div>
        </div>
    );
}

export default StatusColumnComponent;