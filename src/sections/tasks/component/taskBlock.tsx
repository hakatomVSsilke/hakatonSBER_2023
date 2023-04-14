import React from 'react';
import "./taskBlockStyle.css";

const TaskBlock = ({item}: any) => {
    const id = item.id;
    const text = item.text;
    const completeDate = item.completeDate;
    const entityId = item.entityId;
    const entityType = item.entityType;

    return (
        <div className='element-wrapper'>
            <div>

            </div>
            <div>
                {text}
            </div>
        </div>
    );
};

export default TaskBlock;