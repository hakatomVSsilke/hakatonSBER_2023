import {PipelinePageComponentItemTypes} from "./pipelinePageComponentItemTypes.interface";
import React, {ReactNode} from "react";
import {PipelineItemInterface} from "./pipelineItem.interface";
import {FeedbackItemInterface} from "./feedbackItem.interface";

export interface StatusColumn
{
    name: string;

    color?: string;

    id: number;

    items: PipelinePageComponentItemTypes;

    component: any;
}