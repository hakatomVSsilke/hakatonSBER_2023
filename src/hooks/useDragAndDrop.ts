import React, {useState} from "react";


export const useDragAndDrop = () => {
    const [allElements, setAllElements] = useState([]);
    const [elementFrom, setElementFrom] = useState({});

    const setData = (elements: any) => {
            setAllElements((prev: any) => elements);

            console.log(allElements)
    }

    const dragStart = (element: any) => {
        setElementFrom((prev: any) => element);
    }

    const clearAll= () => {
            document.querySelectorAll(`.draggedOver`).forEach(element => {
                element.classList.remove('draggedOver');
            })
    }

    const dragEnd = () => {
            document.querySelectorAll('.draggedOver').forEach(element => {
            element.classList.remove('draggedOver');
        })
    }

    const drop = (data: any) => {
        if (!data.from.item.id || data.dropOnElementId == data.from.item.id) {
         return;
        }

        const droppedInItems: any   = allElements[data.statusTo];
        const removedFromItems: any = allElements[data.from.statusFrom];

        let elementIndex: any = droppedInItems.findIndex((el: any) => el.id == data.dropOnElementId);
        let newArray: any = droppedInItems.filter((el: any) => el.id != data.from.item.id);
        let filteredRemovedFromItems: any = removedFromItems.filter((el: any) => el.id != data.from.item.id);

        elementIndex++;

        newArray = [].concat(newArray.slice(0, elementIndex), data.from.item, newArray.slice(elementIndex));

        let newState: any = allElements;
        newState[data.statusTo] = newArray;

        setAllElements((prev: any) => newState);

        if (data.from.statusFrom === data.statusTo) {
            return;
        }


        newState[data.from.statusFrom] = filteredRemovedFromItems;

        setAllElements((prev: any) => newState);
    }

    return {drop, dragEnd, dragStart, setData, clearAll};
}