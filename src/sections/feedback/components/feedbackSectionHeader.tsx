import React from "react";

import {TitleComponent} from "../../../components/elements/title/title.component";
import ButtonComponent from "../../../components/elements/button/button.component";

import '../../../styles/feedbackSectionHeader.style.css';

const FeedbackSectionHeader = () => {
    return (
        <div id = "feedback_section-header">
            <TitleComponent text = '*По дефолту - все отклики, а так - отклики для отдела*'/>

            <ButtonComponent text = 'Добавить этап' />
        </div>
    );
}

export default FeedbackSectionHeader;