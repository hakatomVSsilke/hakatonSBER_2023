import React, {useEffect} from "react";
import {TitleComponent} from "../elements/title/title.component";

const StatusColumnComponent = ({name, color, id, items,Component}: any) => {
    console.log(name)
    return (
        <div className = "status_column-block" data-id = {id}>
            <div className='status_column-header'>
                <TitleComponent text = {name} />
            </div>

            <div className='status_column-list'>
                {Component('empty', {name: 'empty', statusName: name, className: 'empty'})}

                {
                    items.map((item: any) => {
                        return Component(item.id, item);
                    })
                }
            </div>
        </div>
    );
}

export default StatusColumnComponent;