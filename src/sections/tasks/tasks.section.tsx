import React from 'react';
import "./tasksStyle.css";
import PipelinePageComponent from "../../components/pipeline/pipelinePage.component";
import FeedbackComponent from "../feedback/components/feedback.component";
import TaskHeaderComponent from "./component/taskHeader.component";
import {PipelineItemInterface} from "../../interfaces/pipelineItem.interface";
import {StatusPipelineItemsTypes} from "../../interfaces/pipelinePageComponentItemTypes.interface";
import TaskBlock from "./component/taskBlock";

const TasksSection: React.FunctionComponent = () => {
    const backData: any = [
        { id: 1, name: "Просрочено" },
        { id: 2, name: "Задачи на сегодня" },
        { id: 3, name: "Задачи на потом" },
    ];

    const tasks: StatusPipelineItemsTypes = {};

    return (
        <>
            <TaskHeaderComponent/>

           {/*<PipelinePageComponent statusData ={backData} items = {tasks} component={(item: PipelineItemInterface, id: number) => <TaskBlock key = {id} item = {item}/>}/>*/}
        </>
    );
};

export default TasksSection;