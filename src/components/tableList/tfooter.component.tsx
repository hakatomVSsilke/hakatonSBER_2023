import React from "react";

const TfooterComponent = ({elements}: any) => {
    return (
        <tfoot className="table-footer">
            <tr>
                {
                    elements.map((element: any) => {
                        return <td className="column-end">
                            {element.name}
                        </td>;
                    })
                }
            </tr>
        </tfoot>
    );
}

export default TfooterComponent;