import React from "react";

import {TitleComponent} from "../../../components/elements/title/title.component";
import ButtonComponent from "../../../components/elements/button/button.component";

const FeedbackSectionHeader = () => {
    return (
        <div className = "section-header">
            <TitleComponent text = '*По дефолту - все отклики, а так - отклики для отдела*'/>

            <ButtonComponent text = 'Добавить этап' />
        </div>
    );
}

export default FeedbackSectionHeader;