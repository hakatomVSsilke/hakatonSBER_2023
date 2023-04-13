import React from 'react';
import Header from "../../components/header/header";
import TaskBlock from "./component/taskBlock";
import "./tasksStyle.css";
import CardUser from "../../components/cardUser/cardUser.section";

const TasksSection = () => {
    return (
        <>
{/*            <Header/>

            <div id="container">
                <div id="content">
                    <TaskBlock/>
                </div>
            </div>*/}

            <CardUser/>
        </>
    );
};

export default TasksSection;