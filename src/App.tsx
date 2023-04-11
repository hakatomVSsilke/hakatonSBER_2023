import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthorizedPage from "./pages/authorizedPage";

import "./App.css";

const TitlePage = React.lazy(() => import("./sections/titlePage"));
const FeedBackPipelinePageComponent = React.lazy(
	() => import("./sections/feedback/feedbackPipeline.section")
);
const DepartmentsComponent = React.lazy(
	() => import("./sections/departments/departments")
);

function App() {
	const [userRouter, setUserRouter]: any = useState(null);

	useEffect(() => {
		userRouterHandler(true);
	}, []);

	const userRouterHandler = (isAuthorized: boolean) => {
		setUserRouter(
			<Route path="/" element={<AuthorizedPage />}>
				<Route index element={<TitlePage />} />
				<Route path="feedback">
					<Route
						index
						path="pipeline_view"
						element={<FeedBackPipelinePageComponent />}
					/>
					<Route path="list_view" element={<FeedBackPipelinePageComponent />} />
				</Route>

				<Route path="departments" element={<DepartmentsComponent />} />
			</Route>
		);
	};

	return (
		<BrowserRouter>
			<Routes>{userRouter}</Routes>
		</BrowserRouter>
	);
}

export default App;
