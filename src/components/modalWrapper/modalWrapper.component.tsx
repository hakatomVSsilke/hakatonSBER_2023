import React from "react";

import './modalWrapper.style.css';
import {ModalWrapperInterface} from "../../interfaces/modalWrapper.interface";

const ModalWrapperComponent = ({component, setState}: ModalWrapperInterface) => {
    const closeModalWrapperHandler = (e: any) => {
        if (e.target.id !== 'modal-wrapper-body') {
            return;
        }

        setState(null);
    }

    return (
        <div id = "modal-wrapper-body" onClick={(e: any) => closeModalWrapperHandler(e)}>
            <div id = "modal-wrapper-content">
                {component}
            </div>
        </div>
    );
}

export default ModalWrapperComponent;