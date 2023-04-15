import React, {Dispatch, SetStateAction} from "react";

export interface ModalWrapperInterface
{
    component: React.ReactElement;

    setState: React.SetStateAction<any>;
}