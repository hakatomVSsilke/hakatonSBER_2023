import React from "react";
import ButtonComponent from "../../components/elements/button/button.component";

const MessageFromDepartmentModal = ({setState}: any) => {
    return (
        <div id = "message-from-department-block">
            <div className = "textBlock">
                Это какое-то сообщение, которое будет передаваться сверху
            </div>

            <ButtonComponent text = "Закрыть" onClick = {() => setState(null)}/>
        </div>
    );
}

export default MessageFromDepartmentModal;