import React from "react";

import StatusColumnComponent from "./statusColumn.component";
import {PipelinePageComponentInterface} from "../../interfaces/pipelinePageComponent.interface";

import './pipeline.style.css';
import {StatusData} from "../../interfaces/status.interface";
import {
    PipelinePageComponentItemTypes,
    StatusPipelineItemsTypes
} from "../../interfaces/pipelinePageComponentItemTypes.interface";

const PipelinePageComponent: React.FunctionComponent<PipelinePageComponentInterface> = ({statusData, items, component}) => {
    return (
        <div className="pipeline_page-block">
            <div className = "pipeline_inner-block">
                {
                    Object.values(statusData).map((status: StatusData) => {
                        const statusName: string = status.name || '';
                        let statusItems: PipelinePageComponentItemTypes = [];

                        if (statusName) {
                            statusItems = items[statusName as keyof StatusPipelineItemsTypes];
                        }

                        console.log(statusItems)

                        return <StatusColumnComponent
                            key = {status.id}
                            name={status.name}
                            color = {status.color}
                            id = {status.id}
                            items = {statusItems}
                            component = {(id: any, item: any) => component(id, item)}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default PipelinePageComponent;