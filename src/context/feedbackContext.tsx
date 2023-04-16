import React, {createContext} from "react";

export const FeedbackContext = createContext({
    feedbacks: [],
    dropHandler: () => {},
    dragLeave: () => {},
    dragEnd: () => {},
    dragStart: () => {},
})