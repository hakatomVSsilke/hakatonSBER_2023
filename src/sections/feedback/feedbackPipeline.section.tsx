import React from "react";

import FeedbackSectionHeader from "../../sections/feedback/components/feedbackSectionHeader";
import PipelinePageComponent from "../../components/pipeline/pipelinePage.component";
import {Provider} from "react-redux";
import pipelineStore from "../../stores/pipeline.store";

const FeedBackPipelinePageComponent = () => {
    const backData = {
        test1: {statusName: 'test1', feedbacks: [
            {name: '1'}, {name: '2'}, {name: '3'}
        ]},
        test2: {statusName: 'test2', feedbacks: [{name: '4'}, {name: '5'}, {name: '6'}]},
        test3: {statusName: 'test3', feedbacks: [{name: '6'}, {name: '8'}, {name: '9'}]},
    };

    return (
        <>
            <FeedbackSectionHeader  />

            <Provider store={pipelineStore}>
                <PipelinePageComponent items = {backData}/>
            </Provider>
        </>
    );
}

export default FeedBackPipelinePageComponent;