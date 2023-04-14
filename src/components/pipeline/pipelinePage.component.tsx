import React from "react";

import StatusColumnComponent from "./statusColumn.component";

import './pipeline.style.css';

const PipelinePageComponent = ({statusData, items, Component}: any) => {
    return (
        <div className="pipeline_page-block">
            <div className = "pipeline_inner-block">
                {
                    Object.values(statusData).map((status: any) => {
                        return <StatusColumnComponent
                            key = {status.id}
                            name={status.name}
                            color = {status.color}
                            id = {status.id}
                            items = {items[status.name] || []}
                            Component = {(id: any, item: any) => Component(id, item)}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default PipelinePageComponent;