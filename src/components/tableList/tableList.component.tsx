import React from "react";
import TheadComponent from "./thead.component";
import TbodyComponent from "./tbody.component";
import TfooterComponent from "./tfooter.component";

import './table.style.css';

const TableListComponent = ({theadElements = [], tbodyElements = [], tfooterElements = []}: any) => {
    return (
        <table className="table">
            <TheadComponent key={'thead'} elements={theadElements}/>

            <tbody className="table-body">
            {
                tbodyElements.map((elements: any, index: number) => {
                    return <TbodyComponent key={index} elements={elements}/>
                })
            }
            </tbody>

            <TfooterComponent elements={tfooterElements}/>
        </table>
    );
}

export default TableListComponent;