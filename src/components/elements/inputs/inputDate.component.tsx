import React from 'react';

interface InputDateComponentProps
{
    name?: string;

    value?: string;

    className?: string;

    id?: string;

    onChange?: any;
}

const InputDateComponent: React.FunctionComponent<InputDateComponentProps> = ({name, value, className, onChange = () => {}, id}) => {
    return (
        <>
            <input
                name = {name}
                value = {value}
                className={'form-control date ' + className}
                id = {id}
                onChange={onChange}
            />
        </>
    );
}

export default InputDateComponent;