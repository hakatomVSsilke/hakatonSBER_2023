import React from "react";

const TheadComponent = ({elements}: any) => {
    return (
        <thead className="table-head">
            <tr>
                {
                    elements.map((element: any, index: number) => {
                        return <td key = {index} className="column-name">
                            {element.name}
                        </td>;
                    })
                }
            </tr>
        </thead>
    );
}

export default TheadComponent;