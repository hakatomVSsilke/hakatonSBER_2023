import { Provider } from "react-redux";
import PipelinePageComponent from "../../components/pipeline/pipelinePage.component";
import FeedbackSectionHeader from "../../sections/feedback/components/feedbackSectionHeader";
import pipelineStore from "../../stores/pipeline.store";
import FeedbackComponent from "./components/feedback.component";

import '../../styles/section.style.css';

const FeedBackPipelinePageComponent = () => {
	const backData: any = [
		{ id: 1, name: "status_1" },
		{ id: 2, name: "status_2" },
		{ id: 3, name: "status_3" },
	];

	const feedbackItems: any = {
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
		<>
			<FeedbackSectionHeader />

			<Provider store={pipelineStore}>
				<PipelinePageComponent statusData ={backData} items = {feedbackItems} Component = {(id: any,item: any) => <FeedbackComponent key = {id} item = {item}/>}/>
			</Provider>
		</>
	);
};

export default FeedBackPipelinePageComponent;
