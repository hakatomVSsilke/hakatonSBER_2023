import React         from 'react';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: {},
    dragStartElement: {},
};

export const feedbackPipelineSlice = createSlice({
    name: 'feedbackPipeline',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.items = action.payload;
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
        dragOver: () => {
            // console.log(state, 'over')
        },
        // TODO когда с бэка будут данные прилетать - заменить поиск с name на id
        drop: (state, action) => {
            const data = action.payload;

            const droppedInItems = state.items[data.statusTo].feedbacks;
            let elementIndex = droppedInItems.findIndex(el => el.name === data.dropOnElementId)

            let newArray = droppedInItems.filter(el => el.name !== data.from.item.name);

            elementIndex++;
            // if (elementIndex <= 0) {
            // }

            console.log(newArray.map(el => el.name), data, elementIndex)
            newArray = [].concat(newArray.slice(0, elementIndex), data.from.item, newArray.slice(elementIndex));

            state.items[data.statusTo].feedbacks = newArray;
        },
    }
});

export const {dragStart, dragEnd, dragOver, drop, setData, dragLeave} = feedbackPipelineSlice.actions;

export default feedbackPipelineSlice.reducer;