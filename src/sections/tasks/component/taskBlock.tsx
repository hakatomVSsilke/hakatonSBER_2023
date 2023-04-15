import React from 'react';
import "./taskBlockStyle.css";
import CardUser from "../../../components/cardUser/cardUser";

const TaskBlock = ({item}: any) => {
    const id = item.id;
    const text = item.text;
    const completeDate = item.completeDate;
    const entityId = item.entityId;
    const entityType = item.entityType;

    return (
        <div className='element-wrapper'>
            <div>
                <CardUser/>
            </div>
            <div>
                {text}
            </div>
        </div>
    );
};

export default TaskBlock;