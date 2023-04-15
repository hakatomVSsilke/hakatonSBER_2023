import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthorizedPage from "./pages/authorizedPage";
import AuthPage from "./pages/authorisation/auth.page";

import "./styles/App.css";

const TitlePage = React.lazy(() => import("./sections/titlePage"));

const FeedBackPipelinePageComponent = React.lazy(
    () => import("./sections/feedback/feedbackPipeline.section")
);
const DepartmentsComponent = React.lazy(
    () => import("./sections/departments/departments.section")
);

const ApplicantsComponent = React.lazy(
    () => import("./sections/applicants/applicants.section")
);

const TasksComponent = React.lazy(
    () => import("./sections/tasks/tasks.section")
);

function App() {
    const [userRouter, setUserRouter] = useState<JSX.Element | null>(null);

    useEffect(() => {
        userRouterHandler(true );
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

                <Route path="tasks" element={<TasksComponent />}/>

                <Route path="departments" element={<DepartmentsComponent />} />

                <Route path="applicants" element={<ApplicantsComponent />} />
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
