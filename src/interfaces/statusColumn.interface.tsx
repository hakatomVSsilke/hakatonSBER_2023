import {PipelinePageComponentItemTypes} from "./pipelinePageComponentItemTypes.interface";
import React from "react";

export interface StatusColumn
{
    name: string;

    color?: string;

    id: number;

    items: PipelinePageComponentItemTypes;

    component: React.FunctionComponent;
}