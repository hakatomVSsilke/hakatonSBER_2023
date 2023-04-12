import React from "react";

import StatusColumnComponent from "./statusColumn.component";
import {useDispatch, useSelector} from "react-redux";

import './pipeline.style.css';
import {setData} from "../../slices/feedback/feedbackPipeline.slice";

const PipelinePageComponent = ({items}: any) => {
    const dispatch: any  = useDispatch();
    const feedbacks: any = useSelector((state: any) => state.feedbackPipelineSlice.items);

    if (!Object.values(feedbacks).length) {
        dispatch(setData(items))
    }

    return (
        <div className="pipeline_page-block">
            {
                Object.values(feedbacks).map((statusData: any) => {
                    return <StatusColumnComponent key = {statusData.statusName} name={statusData.statusName} feedbacks={statusData.feedbacks}/>
                })
            }
        </div>
    );
}

export default PipelinePageComponent;