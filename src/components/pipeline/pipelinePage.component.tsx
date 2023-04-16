import React, {useContext} from "react";

import StatusColumnComponent from "./statusColumn.component";
import {PipelinePageComponentInterface} from "../../interfaces/pipelinePageComponent.interface";

import './pipeline.style.css';
import {StatusData} from "../../interfaces/status.interface";
import {
    PipelinePageComponentItemTypes,
    StatusPipelineItemsTypes
} from "../../interfaces/pipelinePageComponentItemTypes.interface";
import {PipelineItemInterface} from "../../interfaces/pipelineItem.interface";

const PipelinePageComponent: any = ({getData, component}: any) => {
    // const {setData}: any = useContext(FeedbackContext);
    const {data} = getData.read();

    console.log(data)

    return (
        <div className="pipeline_page-block">
            <div className = "pipeline_inner-block">
                {/*{*/}
                {/*    Object.values(data).map((status: any) => {*/}
                {/*        const statusName: string = status.name || '';*/}
                {/*        let statusItems: PipelinePageComponentItemTypes = [];*/}

                {/*        if (statusName) {*/}
                {/*            statusItems = items[statusName as keyof StatusPipelineItemsTypes] || [];*/}
                {/*        }*/}

                {/*        return <StatusColumnComponent*/}
                {/*            key = {status.id}*/}
                {/*            name={status.name}*/}
                {/*            color = {status.color}*/}
                {/*            id = {status.id}*/}
                {/*            items = {statusItems}*/}
                {/*            component = {(item: PipelineItemInterface, id: number) => component(item, id)}*/}
                {/*        />*/}
                {/*    })*/}
                {/*}*/}
            </div>
        </div>
    );
}

export default PipelinePageComponent;