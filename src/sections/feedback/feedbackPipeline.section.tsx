import { Provider } from "react-redux";
import PipelinePageComponent from "../../components/pipeline/pipelinePage.component";
import FeedbackSectionHeader from "../../sections/feedback/components/feedbackSectionHeader";
import pipelineStore from "../../stores/pipeline.store";

const FeedBackPipelinePageComponent = () => {
	const backData: any = [
		{ id: 1, name: "status_1" },
		{ id: 2, name: "status_2" },
		{ id: 3, name: "status_3" },
	];

	return (
		<>
			<FeedbackSectionHeader />

			<Provider store={pipelineStore}>
				<PipelinePageComponent items={backData} />
			</Provider>
		</>
	);
};

export default FeedBackPipelinePageComponent;
