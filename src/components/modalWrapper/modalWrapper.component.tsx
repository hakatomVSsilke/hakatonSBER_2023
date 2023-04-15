import React from "react";

import './modalWrapper.style.css';
import {ModalWrapperInterface} from "../../interfaces/modalWrapper.interface";

const ModalWrapperComponent = ({component, setState}: ModalWrapperInterface) => {
    const closeModalWrapperHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const target: HTMLDivElement | undefined= e.target as HTMLDivElement;

        if (target.id !== 'modal-wrapper-body') {
            return;
        }

        setState(null);
    }

    return (
        <div id = "modal-wrapper-body" onClick={(e: React.MouseEvent<HTMLDivElement>) => closeModalWrapperHandler(e)}>
            <div id = "modal-wrapper-content">
                {component}
            </div>
        </div>
    );
}

export default ModalWrapperComponent;