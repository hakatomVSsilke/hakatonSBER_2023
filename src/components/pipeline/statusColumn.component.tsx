import React     from "react";
import {TitleComponent} from "../elements/title/title.component";
import {StatusColumn} from "../../interfaces/statusColumn.interface";
import {PipelineItemInterface} from "../../interfaces/pipelineItem.interface";

const StatusColumnComponent: React.FunctionComponent<StatusColumn> = ({name, color, id, items, component}) => {
    console.log(name)

    return (
        <div className = "status_column-block" data-id = {id} key = {id}>
            <div className='status_column-header'>
                <TitleComponent text = {name} />
            </div>

            <div className='status_column-list'>
                {component('empty', {name: 'empty', statusName: name, className: 'empty'})}

                {
                    items.map((item: PipelineItemInterface, id: number) => {
                        return component(id, item);
                    })
                }
            </div>
        </div>
    );
}

export default StatusColumnComponent;