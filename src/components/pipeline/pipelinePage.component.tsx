import React from "react";

import StatusColumnComponent from "./statusColumn.component";

import './pipeline.style.css';

const PipelinePageComponent = ({items}: any) => {
    return (
        <div className="pipeline_page-block">
            {
                Object.values(items).map((item: any) => {
                    return <StatusColumnComponent key = {item.id} name={item.name} color = {item.color} id = {item.id}/>
                })
            }
        </div>
    );
}

export default PipelinePageComponent;