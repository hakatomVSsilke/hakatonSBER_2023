import React from "react";
import {TitleComponent} from "../../../components/elements/title/title.component";
import ButtonComponent from "../../../components/elements/button/button.component";

import '../../../sections/applicants/component/cardUser/component/chatMessage.style.css'
import {useParams} from "react-router-dom";

const DepartmentChatBlockComponent: React.FunctionComponent = () => {
    const params = useParams<{id: string}>();
    const departmentId: string | undefined = params.id;

    return (
        <div id="chatBlock" style={{height: '91vh'}}>
            <div className="textBlock">
                <TitleComponent text=""/>
            </div>
            <div id="display"></div>
            <div id="blockMessage">
                <input type="text" id="inputText"/>
                <ButtonComponent text="отправить" className="btn"/>
            </div>
        </div>
    );
}

export default DepartmentChatBlockComponent;