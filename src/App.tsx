import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import AuthorizedPage from "./pages/authorizedPage";

import "./styles/App.css";
import AuthPage from "./pages/authorisation/auth.page";
import ChatBlock from "./sections/users/component/chatBlock";

const TitlePage = React.lazy(() => import("./sections/titlePage"));
const FeedBackPipelinePageComponent = React.lazy(
    () => import("./sections/feedback/feedbackPipeline.section")
);
const DepartmentsComponent = React.lazy(
    () => import("./sections/departments/departments.section")
);

const UsersComponent = React.lazy(
    () => import("./sections/users/users.section")
);

const ApplicantsComponent = React.lazy(
    () => import("./sections/applicants/applicants.section")
);

const TasksComponent = React.lazy(
    () => import("./sections/tasks/tasks.section")
);

const ChatBlockComponent = React.lazy(
    () => import("./sections/users/component/chatBlock")
);

function App() {
    const [userRouter, setUserRouter]: any = useState(null);

    useEffect(() => {
        userRouterHandler(true);
    }, []);

    const userRouterHandler = (isAuthorized: boolean) => {
        if (!isAuthorized) {
            setUserRouter(
                <Route path='/*' element={<AuthPage/>}/>
            );

            return;
        }

        setUserRouter(
            <Route path="/" element={<AuthorizedPage/>}>
                <Route index element={<TitlePage/>}/>
                <Route path="feedback">
                    <Route
                        index
                        path="pipeline_view"
                        element={<FeedBackPipelinePageComponent/>}
                    />
                    <Route path="list_view" element={<FeedBackPipelinePageComponent/>}/>
                </Route>

                <Route path="tasks" element={<TasksComponent/>}/>

                <Route path="departments" element={<DepartmentsComponent/>}/>

                <Route path="applicants" element={<ApplicantsComponent/>}/>

                <Route path="users" element={<UsersComponent/>}>
                    <Route path="id" element={<ChatBlockComponent/>}/>
                </Route>
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
