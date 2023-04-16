import React     from "react";
import {TitleComponent} from "../elements/title/title.component";
import {StatusColumn} from "../../interfaces/statusColumn.interface";
import {FeedbackItemInterface} from "../../interfaces/feedbackItem.interface";

const StatusColumnComponent: React.FunctionComponent<StatusColumn> = ({name, color, id, items, component}) => {
    console.log(name)

    return (
        <div className = "status_column-block" data-id = {id} key = {id}>
            <div className='status_column-header'>
                <TitleComponent text = {name} />
            </div>

            <div className='status_column-list'>
                {component({name: 'empty', statusName: name, className: 'empty'}, 'empty')}

                {
                    items.map((item: any, id: number) => {
                        return component(item, id);
                    })
                }
            </div>
        </div>
    );
}

export default StatusColumnComponent;