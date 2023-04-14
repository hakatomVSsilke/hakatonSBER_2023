import React from "react";
import {TitleComponent} from "../../../components/elements/title/title.component";

const TaskHeaderComponent = () => {
    return (
        <div className='section-header'>
            <TitleComponent text = "Задачи" />
        </div>
    );
}

export default TaskHeaderComponent;