import React from "react";
import {DepartmentItemInterface} from "./departmentItem.interface";

export interface DepartmentComponentInterface
{
    item: DepartmentItemInterface;

    setModal?: React.SetStateAction<any>;
}