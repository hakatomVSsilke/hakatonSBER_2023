import React from 'react';
import "./tasksStyle.css";
import {Provider} from "react-redux";
import pipelineStore from "../../stores/pipeline.store";
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

            <Provider store={pipelineStore}>
                <PipelinePageComponent statusData ={backData} items = {tasks} Component = {(id: any,item: any) => <FeedbackComponent key = {id} item = {item}/>}/>
            </Provider>
        </>
    );
};

export default TasksSection;