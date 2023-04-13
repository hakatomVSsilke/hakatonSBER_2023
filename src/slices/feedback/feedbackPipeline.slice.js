import React from 'react';
import {createSlice, current} from '@reduxjs/toolkit';

const initialState = {
    items: {},
    dragStartElement: {},
    excludedId: ''
};

export const feedbackPipelineSlice = createSlice({
    name: 'feedbackPipeline',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.items[action.payload.statusName] = action.payload.feedbacks;
        },
        setElementId: (state, action) => {
            state.excludedId = action.payload.payload;
        },
        clearAll: (state) => {
            document.querySelectorAll(`.draggedOver`).forEach(element => {
                element.classList.remove('draggedOver');
            })
        },
        dragStart: (state, action) => {
            state.dragStartElement = action.payload;
        },
        dragEnd: (state) => {
            document.querySelectorAll('.draggedOver').forEach(element => {
                element.classList.remove('draggedOver');
            })

            state.mouseMoving = false;
        },
        dragLeave: (state, action) => {
            let excludedId = state.excludedId;

            if (typeof excludedId !== 'object') {
                excludedId = ':not(#el_' + excludedId + ')';
            } else {
                excludedId = '';
            }
            document.querySelectorAll(`.draggedOver${excludedId}`).forEach(element => {
                // element.classList.remove('draggedOver');
            })
        },
        dragOver: (state, action) => {
            console.log(action)
        },
        // TODO когда с бэка будут данные прилетать - заменить поиск с name на id
        drop: (state, action) => {
            state.excludedId = '';

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

            state.items[data.statusTo] = newArray;

            if (data.from.statusFrom === data.statusTo) {
                return;
            }

            state.items[data.from.statusFrom] = filteredRemovedFromItems;
        },
    }
});

export const {
    dragOver,
    dragStart,
    dragEnd,
    drop,
    setData,
    dragLeave,
    setElementId,
    clearAll
} = feedbackPipelineSlice.actions;

export default feedbackPipelineSlice.reducer;