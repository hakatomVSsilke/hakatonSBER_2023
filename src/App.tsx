import React, {useEffect, useState} from "react";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import AuthorizedPage from "./pages/authorizedPage";
import AuthPage from "./pages/authorisation/auth.page";

import "./styles/App.css";
import DepartmentChatComponent from "./sections/departments/components/departmentChat.component";

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

const CardUserComponent = React.lazy(
    () => import("./sections/applicants/component/cardUser/cardUser.component")
);

const SettingsComponent = React.lazy(
    () => import("./sections/settings/settings.section")
);

const TelegramSettingsComponent = React.lazy(
    () => import("./sections/settings/components/telegramSettings")
);

const MessagesTemplatesComponent = React.lazy(
    () => import("./sections/settings/components/messagesTemplates")
);

function App() {
    const [userRouter, setUserRouter] = useState<JSX.Element | null>(null);

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

                <Route path="departments" element={<DepartmentsComponent/>}>
                    <Route path={'chat/:id'} element={<DepartmentChatComponent/>}/>
                </Route>

                <Route path="applicants">
                    <Route index element={<ApplicantsComponent/>}/>
                    <Route path=":id" element={<CardUserComponent/>}/>
                </Route>

                <Route path="settings" element={<SettingsComponent/>}>
                    <Route path="telegramSettings" element={<TelegramSettingsComponent/>}/>
                    <Route path="messagesTemplates" element={<MessagesTemplatesComponent/>}/>
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
