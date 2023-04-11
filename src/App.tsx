import React, {useEffect, useState, Suspense} from 'react';
import {BrowserRouter, Routes, Router, Route} from "react-router-dom";

import AuthorizedPage from "./pages/authorizedPage";

import './App.css';

const TitlePage = React.lazy(() => import('./sections/titlePage'));
const FeedBackPipelinePageComponent = React.lazy(() => import('./sections/feedback/feedbackPipeline.section'));

function App() {
    const [userRouter, setUserRouter]: any = useState(null);

    useEffect(() => {
        userRouterHandler(true);
    }, []);

    const userRouterHandler = (isAuthorized: boolean) => {
        setUserRouter(
            <Route path = "/" element={<AuthorizedPage/>}>
                <Route index element={<TitlePage/>} />

                <Route path='feedback'>
                    <Route index path = 'pipeline_view' element={<FeedBackPipelinePageComponent />} />
                    <Route path = 'list_view' element={<FeedBackPipelinePageComponent />} />
                </Route>
            </Route>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                {userRouter}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
