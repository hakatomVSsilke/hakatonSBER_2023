import {StatusData} from "./status.interface";
import {StatusPipelineItemsTypes} from "./pipelinePageComponentItemTypes.interface";
import React, {ReactNode} from "react";
import {PipelineItemInterface} from "./pipelineItem.interface";
import {FeedbackItemInterface} from "./feedbackItem.interface";

export interface PipelinePageComponentInterface
{
    statusData: StatusData[];

    items: StatusPipelineItemsTypes;

    component: any;
}