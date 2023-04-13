import React from 'react';
import Header from "../../components/header/header";
import TaskBlock from "./component/taskBlock";
import "./tasksStyle.css";

const TasksSection = () => {
    return (
        <>
            <Header/>

            <div id="container">
                <div id="content">
                    <TaskBlock/>
                </div>
            </div>
        </>
    );
};

export default TasksSection;