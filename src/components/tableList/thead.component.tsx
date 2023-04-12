import React from "react";

const TheadComponent = ({elements}: any) => {
    return (
        <div className="table-head">
            {
                elements.map((element: any) => {
                    return <div className="column-name">
                        {element.name}
                    </div>;
                })
            }
        </div>
    );
}

export default TheadComponent;