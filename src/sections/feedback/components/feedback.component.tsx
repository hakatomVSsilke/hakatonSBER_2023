import React, {useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    drop,
    dragEnd,
    dragStart,
    dragLeave,
    dragOver,
    setElementId
} from "../../../slices/feedback/feedbackPipeline.slice";

const FeedbackComponent = ({item, statusName, className = ''}: any) => {
    const dispatch= useDispatch();
    const itemId = item.id;
    const itemName = item.name;
    const dragStartElement = useSelector((state: any) => state.feedbackPipelineSlice.dragStartElement);
    const isMoving         = useSelector((state: any) => state.feedbackPipelineSlice.mouseMoving);
    const block: any  = useRef({});

    const dragStartHandler = (e: any) => {
        dispatch(dragStart({item, statusFrom: statusName}))
    }

    const test = (e: any) => {
        console.log(e)

        let element = e.target.closest('.feedback-block');

        if (!element) {
            return;
        }

        let elementId = element.closest('.element-wrapper').previousSibling.querySelector('.feedback-block ').getAttribute('id');

        element.closest('.element-wrapper').previousSibling.querySelector('.wrapper').classList.add('draggedOver');

        document.querySelectorAll(`.wrapper.draggedOver:not([data-id="${elementId}"])`).forEach(element => {
            console.log(elementId, `.wrapper.draggedOver:not([data-id="${elementId}"])`)
            console.log(element)
            // element.classList.remove('draggedOver');
        })
    }

    const dragOverHandler = (e: any) => {
        e.preventDefault();

        if (e.target.dataset.id == dragStartElement.item.id) {
            return;
        }

        let element = e.nativeEvent.target.closest('.feedback-block');

        if (!element || element.getAttribute('id') == dragStartElement.item.id) {
            e.target.classList.add('draggedOver');

            return;
        }

        element.closest('.element-wrapper').previousSibling.querySelector('.wrapper').classList.add('draggedOver');
    }

    const dropHandler = (e: any) => {
        console.log(e)

        if (e.target.getAttribute('id') == dragStartElement.item.id) {
            return;
        }

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
        <div
            className = "element-wrapper"
            draggable={true}
            onDragStart = {(e:any) => dragStartHandler(e)}
            onDragEnter = {(e: any) => test(e)}
        >
            <div
                id = {'el_' + itemId}
                className = {"feedback-block " + className}
                key={itemId}
                ref = {block}
            >
                <div className="top-data">
                    <span>{itemName}</span>

                    <span>{item.response_date}</span>
                </div>

                <div className = "vacancy">
                   {item.vacancy}
                </div>
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