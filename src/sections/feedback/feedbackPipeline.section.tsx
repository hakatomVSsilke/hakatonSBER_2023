import React, {FunctionComponent, Suspense, useContext, useEffect, useState} from "react";
import PipelinePageComponent from "../../components/pipeline/pipelinePage.component";
import FeedbackSectionHeader from "../../sections/feedback/components/feedbackSectionHeader";
import FeedbackComponent from "./components/feedback.component";

import {StatusData} from "../../interfaces/status.interface";
import {StatusPipelineItemsTypes} from "../../interfaces/pipelinePageComponentItemTypes.interface";
import {FeedbackItemInterface} from "../../interfaces/feedbackItem.interface";

import '../../styles/section.style.css';
import {useDragAndDrop} from "../../hooks/useDragAndDrop";
import {Provider} from "react-redux";
import {FeedbackContext} from "../../context/feedbackContext";
import wrappedRequest from "../../requestWrapper/wrapperRequest";
import LoaderComponent from "../../components/elements/loader/loader.component";
import ErrorBoundary from "../../components/errorBoundary/errorBoundary.component";

const FeedBackPipelinePageComponent: React.FunctionComponent = () => {
	const [statuses, setStatuese] = useState({});
	const [pipelinePage, setPipeline] = useState<any>(null);
	const {drop, dragEnd, dragStart, setData, clearAll} = useDragAndDrop();

	useEffect(() => {
		const {getData} = wrappedRequest('response/getStatus', 'GET', {}, {'Authorization': 'Bearer ' + localStorage.getItem('token')});

		setPipeline(
			<PipelinePageComponent getData ={getData} component = {(item: any, id: number) => <FeedbackComponent key = {id} item={item}/>}/>
		)
	}, [])


	return (
		<FeedbackContext.Provider value = {{drop, dragEnd, dragStart, setData, clearAll}}>
			<FeedbackSectionHeader />


				<ErrorBoundary errorTitle = "Ошибка!" errorTexxt = "Возникла ошибка при запросе откликов">
					<Suspense fallback={<LoaderComponent />}>
						{pipelinePage}
					</Suspense>
				</ErrorBoundary>
		</FeedbackContext.Provider>
	);
};

export default FeedBackPipelinePageComponent;
