import React from 'react';
import {useParams} from "react-router-dom";

const ChatBlock = () => {
    const {id} : any = useParams();
    return (
        <div>
            <span>{id}</span>
        </div>
    );
};

export default ChatBlock;