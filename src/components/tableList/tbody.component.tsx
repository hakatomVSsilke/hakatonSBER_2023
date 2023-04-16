import React from "react";
import {Link, Params, useParams} from "react-router-dom";
import DepartmentsHeaderComponent from "../../sections/departments/components/departmentsHeader.component";
import CardUserComponent from "../../sections/applicants/component/cardUser/cardUser.component";
import UserCard from "../elements/userCard/userCard.section";

const TbodyComponent = ({elements}: any) => {
    const params = useParams<{ id: string }>();
    const linkId: string | undefined = params.id;

    const check = () => {
        const btnElement: HTMLButtonElement | null = document.querySelector(".visionBtn");
        const inputList: NodeListOf<HTMLInputElement> = document.querySelectorAll(".checkBox");

        if (btnElement === null) {
            return;
        }
        btnElement.style.visibility = "hidden";
        let flag: boolean = false;

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
                elements.map((element: { href?: string, name: string }, index: number) => {
                    let value: any = element.name;

                    if (element.href) {
                        value = <Link to={element.href} className="text-link"> {element.name} </Link>
                    }
                    return <td key={index} className="column-value">
                        {value}
                    </td>;
                })
            }
        </tr>
    );
}

export default TbodyComponent;