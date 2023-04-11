import {configureStore}      from '@reduxjs/toolkit';
import feedbackPipelineSlice from '../slices/feedback/feedbackPipeline.slice';
export default configureStore({
    reducer: {
        feedbackPipelineSlice
    }
});