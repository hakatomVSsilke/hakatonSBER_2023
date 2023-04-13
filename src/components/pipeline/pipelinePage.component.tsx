import React from "react";

import StatusColumnComponent from "./statusColumn.component";

import './pipeline.style.css';

const PipelinePageComponent = ({items, Component}: any) => {
    return (
        <div className="pipeline_page-block">
            {
                Object.values(items).map((item: any) => {
                    return <StatusColumnComponent
                        key = {item.id}
                        name={item.name}
                        color = {item.color}
                        id = {item.id}
                        Component = {(id: any, item: any, name: any, className: string = '') => Component(id, item, name, className)}/>
                })
            }
        </div>
    );
}

export default PipelinePageComponent;