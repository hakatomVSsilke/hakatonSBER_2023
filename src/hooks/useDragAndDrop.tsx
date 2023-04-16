import React, {useState} from "react";

interface ElementFromProps
{
    allElements: any;

    elementFrom: any;
}

export const useDragAndDrop = () => {
    const [allElements, setAllElements] = useState([]);
    const [elementFrom, setElementFrom] = useState({});

    const setData = (elements: any) => {
            setAllElements((prev: any) => elements);
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

        let elementIndex = droppedInItems.findIndex((el: any) => el.id == data.dropOnElementId);
        let newArray = droppedInItems.filter((el: any) => el.id != data.from.item.id);
        let filteredRemovedFromItems = removedFromItems.filter((el: any) => el.id != data.from.item.id);

        elementIndex++;

        newArray = [].concat(newArray.slice(0, elementIndex), data.from.item, newArray.slice(elementIndex));

        allElements[data.statusTo] = newArray;

        if (data.from.statusFrom === data.statusTo) {
            return;
        }

        allElements[data.from.statusFrom] = filteredRemovedFromItems;
    }
}