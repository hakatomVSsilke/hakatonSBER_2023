import React, {useEffect} from "react";
import {TitleComponent} from "../elements/title/title.component";
import {StatusData} from "../../interfaces/status.interface";
import {StatusColumn} from "../../interfaces/statusColumn.interface";

const StatusColumnComponent: React.FunctionComponent<StatusColumn> = ({name, color, id, items, component}) => {
    return (
        <div className = "status_column-block" data-id = {id}>
            <div className='status_column-header'>
                <TitleComponent text = {name} />
            </div>

            <div className='status_column-list'>
                {component('empty', {name: 'empty', statusName: name, className: 'empty'})}

                {
                    items.map((item: any) => {
                        return component(item.id, item);
                    })
                }
            </div>
        </div>
    );
}

export default StatusColumnComponent;