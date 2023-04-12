import React from "react";

const TfooterComponent = ({elements}: any) => {
    return (
        <div className="table-footer">
            {
                elements.map((element: any) => {
                    return <div className="column-end">
                        {element.name}
                    </div>;
                })
            }
        </div>
    );
}

export default TfooterComponent;