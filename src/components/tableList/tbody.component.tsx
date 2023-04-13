import React from "react";

const TbodyComponent = ({elements}: any) => {
    return (
        <tr className = "table-body">
            {
                elements.map((element: any, index: number) => {
                    return <td key ={index} className="column-value">
                        {element.name}
                    </td>;
                })
            }
        </tr>
    );
}

export default TbodyComponent;