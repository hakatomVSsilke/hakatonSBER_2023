import {StatusData} from "./status.interface";
import {StatusPipelineItemsTypes} from "./pipelinePageComponentItemTypes.interface";

export interface PipelinePageComponentInterface
{
    statusData: StatusData[];

    items: StatusPipelineItemsTypes;

    component: any;
}