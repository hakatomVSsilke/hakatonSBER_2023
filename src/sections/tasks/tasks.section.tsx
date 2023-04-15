import React from 'react';
import "./tasksStyle.css";
import {Provider} from "react-redux";
import PipelinePageComponent from "../../components/pipeline/pipelinePage.component";
import FeedbackComponent from "../feedback/components/feedback.component";
import TaskHeaderComponent from "./component/taskHeader.component";

const TasksSection = () => {
    const backData: any = [
        { id: 1, name: "Просрочено" },
        { id: 2, name: "Задачи на сегодня" },
        { id: 3, name: "Задачи на потом" },
    ];

    const tasks: any = [
    ];

    return (
        <>
            <TaskHeaderComponent/>

           <PipelinePageComponent statusData ={backData} items = {tasks} component={(id: any,item: any) => <FeedbackComponent key = {id} item = {item}/>}/>
        </>
    );
};

export default TasksSection;