import React from "react";
import {Link, useParams} from "react-router-dom";

const TbodyComponent = ({elements}: any) => {
    const link: any = useParams();
    const linkId: any = link.id;

    return (
        <tr className="table-body">
            <input type="checkbox" className="checkBox"/>
            {
                elements.map((element: any, index: number) => {
                    return <td key={index} className="column-value">
                        {element.name}
                    </td>;
                })
            }
        </tr>
    );
}

export default TbodyComponent;