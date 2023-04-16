import React, {useContext, useEffect, useState} from "react";

import StatusColumnComponent from "./statusColumn.component";
import {PipelinePageComponentInterface} from "../../interfaces/pipelinePageComponent.interface";

import './pipeline.style.css';
import {StatusData} from "../../interfaces/status.interface";
import {
    PipelinePageComponentItemTypes,
    StatusPipelineItemsTypes
} from "../../interfaces/pipelinePageComponentItemTypes.interface";
import {PipelineItemInterface} from "../../interfaces/pipelineItem.interface";
import {useHttp} from "../../hooks/useHTTP";

const PipelinePageComponent: any = ({getData, endPoint, component}: any) => {
    const {request} = useHttp();
    let [statuses,setStatuses] = useState(getData.read());
    let [statusesData,setStatusesData] = useState([]);
    let [columnComponent, setColumnComponent] = useState<any>(null);

    useEffect(() => {
        getDataHandler();
    }, [])

    const getDataHandler = async () => {
        const response = await request(endPoint, 'GET', {}, {'Authorization': 'Bearer ' + localStorage.getItem('token')}, {})
        let data: any  = {};

        response.forEach((item: any) => {
            if (data[item.status.id] == undefined) {
                data[item.status.id] = [];
            }

            data[item.status.id].push(item);
        })

        setColumnComponent(
            Object.values(statuses).map((status: any) => {
                const statusId: string = status.id || '';
                let statusItems: PipelinePageComponentItemTypes = [];

                if (statusId) {
                    statusItems = data[statusId as keyof StatusPipelineItemsTypes] || [];
                }
                return <StatusColumnComponent
                    key = {status.id}
                    name={status.status}
                    color = {status.color}
                    id = {status.id}
                    items = {statusItems}
                    component = {(item: PipelineItemInterface, id: number) => component(item, id)}
                />
            })
        );
    }

    return (
        <div className="pipeline_page-block">
            <div className = "pipeline_inner-block">
                {
                    columnComponent
                }
            </div>
        </div>
    );
}

export default PipelinePageComponent;