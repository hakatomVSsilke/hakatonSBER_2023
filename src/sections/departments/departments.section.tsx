import React, {useState} from "react";
import Header from "../../components/header/header";
import "./departments.css";
import DepartmentComponent from "./department.component";

const departments = [
    {
        id: 1,
        name: 'Отдел менеджмента',
        empCountNow: 8,
        empCountMax: 10
    },
    {
        id: 2,
        name: 'Отдел разработки',
        empCountNow: 3,
        empCountMax: 5
    },
    {
        id: 3,
        name: 'Отдел маркетинга',
        empCountNow: 10,
        empCountMax: 10
    },
    {
        id: 4,
        name: 'Отдел бухгалтерии',
        empCountNow: 8,
        empCountMax: 10
    },
    {
        id: 5,
        name: 'Отдел менеджмента 2',
        empCountNow: 8,
        empCountMax: 10
    },
    {
        id: 6,
        name: 'Отдел менеджмента 3',
        empCountNow: 8,
        empCountMax: 10
    },
    {
        id: 7,
        name: 'Отдел менеджмента 4',
        empCountNow: 8,
        empCountMax: 10
    },
];

function Departments() {
    const [modal, setModal] = useState(null);

    return (
        <>
            <Header/>

            <div id="container">
                {
                    departments.map((department: any) => {
                    return <DepartmentComponent key = {department.id} item = {department} setModal = {setModal}/>
                })
                }
            </div>

            {modal}
        </>
    );
}

export default Departments;
