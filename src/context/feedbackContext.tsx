import React, {createContext} from "react";

export const FeedbackContext: any = createContext({
    feedbacks: [],
    dropHandler: () => {},
    dragLeave: () => {},
    dragEnd: () => {},
    dragStart: () => {},
    setData: () => {},
})