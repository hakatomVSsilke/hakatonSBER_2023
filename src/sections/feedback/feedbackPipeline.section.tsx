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

const FeedBackPipelinePageComponent: React.FunctionComponent = () => {
	const [statuses, setStatuese] = useState({});
	const [pipelinePage, setPipeline] = useState<any>(null);
	const {drop, dragEnd, dragStart, setData, clearAll} = useDragAndDrop();

	useEffect(() => {
		const {getData} = wrappedRequest('response/getStatus', 'POST');
		console.log(getData)
		setPipeline(
			<PipelinePageComponent getData ={getData} component = {(item: any, id: number) => <FeedbackComponent key = {id} item={item}/>}/>
		)
	}, [])

	const feedbackItems: StatusPipelineItemsTypes = {
		'status_1': [
			{
				id: 1,
				name: 'ФИО 1 статус 1',
				response_date: '10.10.2023',
				vacancy: 'Должность на android разработчика',
			},
			{
				id: 2,
				name: 'ФИО 2 статус 1',
				response_date: '10.11.2023',
				vacancy: 'Должность на android разработчика',
			},
			{
				id: 3,
				name: 'ФИО 3 статус 1',
				response_date: '09.10.2023',
				vacancy: 'Должность на android разработчика',
			},
			{
				id: 4,
				name: 'ФИО 4 статус 1',
				response_date: '06.10.2023',
				vacancy: 'Должность на android разработчика',
			},
		],
		'status_2': [
			{
				id: 5,
				name: 'ФИО 5 статус 2',
				response_date: '10.10.2023',
				vacancy: 'Должность на android разработчика',
			},
			{
				id: 6,
				name: 'ФИО 6 статус 2',
				response_date: '10.11.2023',
				vacancy: 'Должность на android разработчика',
			},
			{
				id: 7,
				name: 'ФИО 7 статус 2',
				response_date: '09.10.2023',
				vacancy: 'Должность на android разработчика',
			},
			{
				id: 8,
				name: 'ФИО 8 статус 2',
				response_date: '06.10.2023',
				vacancy: 'Должность на android разработчика',
			},
		],
		'status_3': [
			{
				id: 9,
				name: 'ФИО 9 статус 3',
				response_date: '10.10.2023',
				vacancy: 'Должность на android разработчика',
			},
			{
				id: 10,
				name: 'ФИО 10 статус 3',
				response_date: '10.11.2023',
				vacancy: 'Должность на android разработчика',
			},
			{
				id: 11,
				name: 'ФИО 11 статус 3',
				response_date: '09.10.2023',
				vacancy: 'Должность на android разработчика',
			},
			{
				id: 12,
				name: 'ФИО 12 статус 3',
				response_date: '06.10.2023',
				vacancy: 'Должность на android разработчика',
			},
		]
	};

	return (
		<FeedbackContext.Provider value = {{drop, dragEnd, dragStart, setData, clearAll}}>
			<FeedbackSectionHeader />


			<Suspense fallback={<LoaderComponent />}>
				{pipelinePage}
			</Suspense>
		</FeedbackContext.Provider>
	);
};

export default FeedBackPipelinePageComponent;
