import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthorizedPage from "./pages/authorizedPage";

import "./App.css";
import AuthPage from "./pages/authorisation/auth.page";

const TitlePage = React.lazy(() => import("./sections/titlePage"));
const FeedBackPipelinePageComponent = React.lazy(
	() => import("./sections/feedback/feedbackPipeline.section")
);
const DepartmentsComponent = React.lazy(
	() => import("./sections/departments/departments")
);

const UsersComponent = React.lazy(
	() => import("./sections/users/users.section")
);

function App() {
	const [userRouter, setUserRouter]: any = useState(null);

	useEffect(() => {
		userRouterHandler(true);
	}, []);

	const userRouterHandler = (isAuthorized: boolean) => {
		if (!isAuthorized) {
			setUserRouter(
				<Route path='/*' element={<AuthPage />} />
			);

			return;
		}

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


				<Route path="users" element={<UsersComponent />} />
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
