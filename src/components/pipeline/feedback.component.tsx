import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    drop,
    dragEnd,
    dragStart,
    dragLeave,
} from "../../slices/feedback/feedbackPipeline.slice";

const FeedbackComponent = ({item, statusName}: any) => {
    const dispatch= useDispatch();
    const itemId = item.name;
    const itemName = item.name;
    const dragStartElement = useSelector((state: any) => state.feedbackPipelineSlice.dragStartElement);

    const dragOverHandler = (e: any) => {
        e.preventDefault();

        e.target.classList.add('draggedOver');
    }

    const dropHandler = (e: any) => {
        const data = {
            dropOnElementId: e.target.dataset.id,
            position: e.target.dataset.position,
            statusTo: statusName,
            from: dragStartElement,
        };

        dispatch(drop(data));
        dispatch(dragEnd());
    }

    return (
        <div className = "element-wrapper" onDragEnd = {() => dispatch(dragEnd())} onDragLeave={() => dispatch(dragLeave())}>
            <div
                draggable='true'
                onDragStart = {() => dispatch(dragStart({item, statusFrom: statusName}))}
                id = {itemId}
                className = {"feedback-block"}
                key={itemId}
            >
                {itemName}
            </div>

            <div
                className={'wrapper'}
                onDragOver ={(e:any) => dragOverHandler(e)}
                onDrop = {(e: any) => dropHandler(e)}
                onDragEnd = {() => dispatch(dragEnd())}
                data-id = {itemId}
                data-position = "bottom"
            >
            </div>

        </div>
    );
}

export default FeedbackComponent;