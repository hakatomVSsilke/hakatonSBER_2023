import React, {useState} from "react";
import "./components/departments.css";
import DepartmentComponent from "./components/department.component";
import DepartmentsHeaderComponent from "./components/departmentsHeader.component";

import '../../styles/section.style.css';
import {DepartmentItemInterface} from "../../interfaces/departmentItem.interface";

const departments: DepartmentItemInterface[] = [
    {
        id: 1,
        name: 'Отдел менеджмента',
        depLeadId: 1,
    },
    {
        id: 2,
        name: 'Отдел разработки',
        depLeadId: 1,
    },
    {
        id: 3,
        name: 'Отдел маркетинга',
        depLeadId: 1,
    },
    {
        id: 4,
        name: 'Отдел бухгалтерии',
        depLeadId: 1,
    },
    {
        id: 5,
        name: 'Отдел менеджмента 2',
        depLeadId: 1,
    },
    {
        id: 6,
        name: 'Отдел менеджмента 3',
        depLeadId: 1,
    },
    {
        id: 7,
        name: 'Отдел менеджмента 4',
        depLeadId: 1,
    },
];

function Departments() {
    const [modal, setModal] = useState<JSX.Element | null>(null);

    return (
        <>
            <DepartmentsHeaderComponent/>

            <div id="container">
                {
                    departments.map((item: DepartmentItemInterface) => {
                        return <DepartmentComponent key = {item.id} item = {item} setModal = {setModal}/>
                })
                }
            </div>

            {modal}
        </>
    );
}

export default Departments;
