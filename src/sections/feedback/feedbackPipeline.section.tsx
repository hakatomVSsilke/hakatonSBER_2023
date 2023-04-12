import React from "react";

import FeedbackSectionHeader from "../../sections/feedback/components/feedbackSectionHeader";
import PipelinePageComponent from "../../components/pipeline/pipelinePage.component";
import {Provider} from "react-redux";
import pipelineStore from "../../stores/pipeline.store";

const FeedBackPipelinePageComponent = () => {
    const backData = {
        test1: {
            statusName: 'test1', feedbacks: [
                {
                    id: 1,
                    name: 'ФИО',
                    response_date: '29.01.2023',
                    status_id: 2
                }
            ]
        },
        test2: {
            statusName: 'test2', feedbacks: [
                {
                    id: 1,
                    name: 'ФИО',
                    response_date: '29.01.2023',
                    status_id: 2
                }
            ]
        },
        test3: {
            statusName: 'test3', feedbacks: [
                {
                    id: 1,
                    name: 'ФИО',
                    response_date: '29.01.2023',
                    status_id: 2
                }
            ]
        },
    };

    return (
        <>
            <FeedbackSectionHeader/>

            <Provider store={pipelineStore}>
                <PipelinePageComponent items={backData}/>
            </Provider>
        </>
    );
}

export default FeedBackPipelinePageComponent;