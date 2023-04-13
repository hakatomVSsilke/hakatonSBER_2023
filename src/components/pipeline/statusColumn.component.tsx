import React, {useEffect} from "react";
import {TitleComponent} from "../elements/title/title.component";
import FeedbackComponent from "../../sections/feedback/components/feedback.component";
import {useDispatch, useSelector} from "react-redux";
import {setData} from "../../slices/feedback/feedbackPipeline.slice";

const feedbackItems: any = {
    'status_1': [
        {
            id: 1,
            name: 'ФИО 1 статус 1',
            response_date: '10.10.2023',
            vacancy: 'Должность на android разработчика',
        },
        {
            id: 2,
            name: 'ФИО 2 статус 1',
            response_date: '10.11.2023',
            vacancy: 'Должность на android разработчика',
        },
        {
            id: 3,
            name: 'ФИО 3 статус 1',
            response_date: '09.10.2023',
            vacancy: 'Должность на android разработчика',
        },
        {
            id: 4,
            name: 'ФИО 4 статус 1',
            response_date: '06.10.2023',
            vacancy: 'Должность на android разработчика',
        },
    ],
    'status_2': [
        {
            id: 5,
            name: 'ФИО 5 статус 2',
            response_date: '10.10.2023',
            vacancy: 'Должность на android разработчика',
        },
        {
            id: 6,
            name: 'ФИО 6 статус 2',
            response_date: '10.11.2023',
            vacancy: 'Должность на android разработчика',
        },
        {
            id: 7,
            name: 'ФИО 7 статус 2',
            response_date: '09.10.2023',
            vacancy: 'Должность на android разработчика',
        },
        {
            id: 8,
            name: 'ФИО 8 статус 2',
            response_date: '06.10.2023',
            vacancy: 'Должность на android разработчика',
        },
    ],
    'status_3': [
        {
            id: 9,
            name: 'ФИО 9 статус 3',
            response_date: '10.10.2023',
            vacancy: 'Должность на android разработчика',
        },
        {
            id: 10,
            name: 'ФИО 10 статус 3',
            response_date: '10.11.2023',
            vacancy: 'Должность на android разработчика',
        },
        {
            id: 11,
            name: 'ФИО 11 статус 3',
            response_date: '09.10.2023',
            vacancy: 'Должность на android разработчика',
        },
        {
            id: 12,
            name: 'ФИО 12 статус 3',
            response_date: '06.10.2023',
            vacancy: 'Должность на android разработчика',
        },
    ]
};

const StatusColumnComponent = ({name, color, id, Component}: any) => {
    const dispatch = useDispatch();
    const feedbacks = useSelector((state: any) => {
        return state.feedbackPipelineSlice.items[name] ?? [];
    });

    useEffect(() => {
        if (!feedbacks.length) {
            dispatch(
                setData({statusName: name, feedbacks: feedbackItems[name]})
            );
        }
    })

    return (
        <div className = "status_column-block" data-id = {id}>
            <div className='status_column-header'>
                <TitleComponent text = {name} />
            </div>

            <div className='status_column-list'>
                {Component('empty', {name: 'empty'}, name, "empty")}

                {
                    feedbacks.map((item: any) => {
                        return Component(item.id, item, name);
                    })
                }
            </div>
        </div>
    );
}

export default StatusColumnComponent;