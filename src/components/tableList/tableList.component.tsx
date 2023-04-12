import React from "react";
import TheadComponent from "./thead.component";
import TbodyComponent from "./tbody.component";
import TfooterComponent from "./tfooter.component";

import './table.style.css';

const TableListComponent = ({theadElements, tbodyElements, tfooterElements}: any) => {
    return (
        <div className="table">
            <TheadComponent elements={theadElements}/>
            {
                tbodyElements.map((elements: any) => {
                    return <TbodyComponent elements={elements}/>
                })
            }
            <TfooterComponent elements={tfooterElements}/>
        </div>
    );
}

export default TableListComponent;