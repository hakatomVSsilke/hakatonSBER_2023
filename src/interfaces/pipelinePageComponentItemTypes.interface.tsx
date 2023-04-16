import {FeedbackItemInterface} from "./feedbackItem.interface";

export type PipelinePageComponentItemTypes = [] |  FeedbackItemInterface[];
export type StatusPipelineItemsTypes = {[index: string]: any} | {[index: string]: FeedbackItemInterface[]};
