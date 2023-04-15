import React from "react";
import {Link, Params, useParams} from "react-router-dom";

const TbodyComponent = ({elements}: any) => {
    const link: any = useParams();
    const linkId: any = link.id;


    const check = () => {
        const btnElement: HTMLButtonElement | null = document.querySelector(".visionBtn");
        const inputList: NodeListOf<HTMLInputElement> = document.querySelectorAll(".checkBox");

        if (btnElement === null) {
            return;
        }
        btnElement.style.visibility = "hidden";
        let flag: boolean = false;
        console.log(1);
        inputList.forEach((item: HTMLInputElement): void => {
            if (flag) {
                return;
            }

            flag = item.checked;
        })
        if (flag) {
            btnElement.style.visibility = "visible";
        }
    }

    return (
        <tr className="table-body">
            <input type="checkbox" className="checkBox" onChange={check}/>
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