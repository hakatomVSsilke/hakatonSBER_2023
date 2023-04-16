import React from "react";

type errorState = {
    hasError: boolean,
    errorText: string
}

interface ErrorComponentProps
{
    errorTitle: string;

    errorText: string;
}

interface ErrorBoundaryComponent
{
    component: any;
}

export default class ErrorBoundary extends React.Component<any, any>
{
    state: errorState = {
        hasError : false,
        errorText : ''
    }

    static getDerivedStateFromError(errorText: string): errorState
    {
        return {
            hasError: true,
            errorText
        }
    }

    render(): any {
        if (this.state.hasError) {
            let errorTitle: string = this.props.errorTitle;
            let errorText: string  = this.state.errorText;

            return <ErrorComponent errorTitle={errorTitle} errorText={errorText}/>;
        }

        return this.props.children;
    }
}

const ErrorComponent: React.FunctionComponent<ErrorComponentProps> = ({errorTitle, errorText}) => {
    return (
        <div className='error-element'>
            <h1>{errorTitle}</h1>

            <div className='error-description'>
                {errorText}
            </div>
        </div>
    );
}