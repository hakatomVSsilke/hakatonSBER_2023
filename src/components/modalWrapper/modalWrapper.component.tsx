import React from "react";

import './modalWrapper.style.css';

const ModalWrapperComponent = ({component, setState}: any) => {
    const closeModalWrapperHandler = (e: any) => {
        console.log(setState)
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