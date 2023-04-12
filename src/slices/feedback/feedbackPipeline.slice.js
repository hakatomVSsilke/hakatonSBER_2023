import React         from 'react';
import {createSlice, current} from '@reduxjs/toolkit';

const initialState = {
    items: {},
    dragStartElement: {},
};

export const feedbackPipelineSlice = createSlice({
    name: 'feedbackPipeline',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.items[action.payload.statusName] = action.payload.feedbacks;
        },
        dragStart: (state, action) => {
            state.dragStartElement = action.payload;
        },
        dragEnd: () => {
            document.querySelectorAll('.draggedOver').forEach(element => {
                element.classList.remove('draggedOver');
            })
        },
        dragLeave: () => {
            document.querySelectorAll('.draggedOver').forEach(element => {
                element.classList.remove('draggedOver');
            })
        },
        // TODO когда с бэка будут данные прилетать - заменить поиск с name на id
        drop: (state, action) => {
            const data = action.payload;

            if (!data.from.item.id || data.dropOnElementId == data.from.item.id) {
                return;
            }

            const droppedInItems   = state.items[data.statusTo];
            const removedFromItems = state.items[data.from.statusFrom];

            let elementIndex = droppedInItems.findIndex(el => el.id == data.dropOnElementId);
            let newArray = droppedInItems.filter(el => el.id != data.from.item.id);
            let filteredRemovedFromItems = removedFromItems.filter(el => el.id != data.from.item.id);

            elementIndex++;

            newArray = [].concat(newArray.slice(0, elementIndex), data.from.item, newArray.slice(elementIndex));

            console.log(filteredRemovedFromItems.map(el => el.name))

            state.items[data.statusTo] = newArray;

            if (data.from.statusFrom === data.statusTo) {
                return;
            }

            state.items[data.from.statusFrom] = filteredRemovedFromItems;
        },
    }
});

export const {dragStart, dragEnd,drop, setData, dragLeave} = feedbackPipelineSlice.actions;

export default feedbackPipelineSlice.reducer;