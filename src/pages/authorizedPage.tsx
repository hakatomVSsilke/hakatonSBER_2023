import React, {Suspense} from "react";
import NavSection from "../components/navSection/navSection";
import {Outlet} from "react-router-dom";
import LoaderComponent from "../components/elements/loader/loader.component";

const AuthorizedPage = () => {
    return (
        <>
            <NavSection />

            <div id = "page_content">
                <Suspense fallback={<LoaderComponent />}>
                     <Outlet />
                </Suspense>
            </div>
        </>
    );
}

export default AuthorizedPage;