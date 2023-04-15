import {StatusData} from "./status.interface";
import {StatusPipelineItemsTypes} from "./pipelinePageComponentItemTypes.interface";
import React from "react";

export interface PipelinePageComponentInterface
{
    statusData: StatusData[];

    items: StatusPipelineItemsTypes;

    component: any;
}