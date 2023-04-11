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
            console.log(state.dragStartElement)
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
        drop: (state, action) => {
            const data               = action.payload;
            const forAddFeedbacks    = state.items[data.status].feedbacks;
            const forRemoveFeedbacks = state.items[data.statusFrom.statusBefore].feedbacks;
            let addIndex = forAddFeedbacks.findIndex(el => el == data.id);
            let removeIndex = forAddFeedbacks.findIndex(el => el == data.id);
            //
            // if (data.position === 'bottom') {
            //     index++;
            // }
            //
            let newArray = [].concat(forAddFeedbacks.slice(0, addIndex), [data.from.item], forAddFeedbacks.slice(addIndex));
            let newArray2 = [].concat(forAddFeedbacks.slice(0, removeIndex), forRemoveFeedbacks.slice(removeIndex));

            console.log(newArray, data.from)
            //
            state.items[data.status].feedbacks = newArray;
            state.items[data.status].feedbacks = newArray;
        },
    }
});

export const {dragStart, dragEnd, dragOver, drop, setData, dragLeave} = feedbackPipelineSlice.actions;

export default feedbackPipelineSlice.reducer;