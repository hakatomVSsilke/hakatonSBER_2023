import React from 'react';
import "./taskBlockStyle.css";
import CardUserComponent from "../../applicants/component/cardUser/cardUser.component";

const TaskBlock = ({item}: any) => {
    const id = item.id;
    const text = item.text;
    const completeDate = item.completeDate;
    const entityId = item.entityId;
    const entityType = item.entityType;

    return (
        <div className='element-wrapper'>
            <div>
                <CardUserComponent/>
            </div>
            <div>
                {text}
            </div>
        </div>
    );
};

export default TaskBlock;