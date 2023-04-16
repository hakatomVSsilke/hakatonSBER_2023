import React, {useState} from "react";

import {TitleComponent} from "../../../components/elements/title/title.component";
import ButtonComponent from "../../../components/elements/button/button.component";
import ModalWrapperComponent from "../../../components/modalWrapper/modalWrapper.component";
import feedbackFilterModalComponent from "./feedbackFilterModal.component";
import FeedbackFilterModalComponent from "./feedbackFilterModal.component";

const FeedbackSectionHeader = () => {
    const [filterModal, setFilterModal] = useState<React.ReactElement | null>(null);

    const setModalHandler = () => {
        setFilterModal(<ModalWrapperComponent component={<FeedbackFilterModalComponent/>} setState={setFilterModal}/>)
    }

    return (
        <>
            <div className = "section-header">
                <TitleComponent text = '*По дефолту - все отклики, а так - отклики для отдела*'/>

                <ButtonComponent text = 'Фильтр' onClick={setModalHandler}/>
            </div>

            {filterModal}
        </>

    );
}

export default FeedbackSectionHeader;