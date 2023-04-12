import React from "react";

const TbodyComponent = ({elements}: any) => {
    return (
        <div className = "table-body">
            {
                elements.map((element: any) => {
                    return <div className="column-value">
                        {element.name}
                    </div>;
                })
            }
        </div>
    );
}

export default TbodyComponent;