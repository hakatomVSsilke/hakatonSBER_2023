import "./departments.css";
import {TitleComponent} from "../../components/elements/title/title.component";
import ButtonComponent from "../../components/elements/button/button.component";
import React, {useState} from "react";

function Departments() {

	const handleMessageBox = () => {
		console.log(1);
	}


	return (
		<div id="container">
			<div className="department">
				<TitleComponent text = "Отдел менеджмента"/>
				<div className="info">
					<span>Количество менеджеров 8/10</span>
					<ButtonComponent text="Сообщение" className="btn" onClick={() => handleMessageBox}/>
				</div>
			</div>


			<div className="department">
				<TitleComponent text = "Отдел маркетинга"/>
				<div className="info">
					<span>Количество менеджеров 3/10</span>
					<ButtonComponent text="Сообщение"/>
				</div>
			</div>



			<div className="department">
				<TitleComponent text = "Отдел Front"/>
				<div className="info">
					<span>Количество менеджеров 10/10</span>
					<ButtonComponent text="Сообщение"/>
				</div>
			</div>

			<div className="department">
				<TitleComponent text = "Отдел менеджмента"/>
				<div className="info">
					<span>Количество менеджеров 8/10</span>
					<ButtonComponent text="Сообщение"/>
				</div>
			</div>


			<div className="department">
				<TitleComponent text = "Отдел менеджмента"/>
				<div className="info">
					<span>Количество менеджеров 8/10</span>
					<ButtonComponent text="Сообщение"/>
				</div>
			</div>


			<div className="department">
				<TitleComponent text = "Отдел менеджмента"/>
				<div className="info">
					<span>Количество менеджеров 8/10</span>
					<ButtonComponent text="Сообщение"/>
				</div>
			</div>


			<div className="department">
				<TitleComponent text = "Отдел менеджмента"/>
				<div className="info">
					<span>Количество менеджеров 8/10</span>
					<ButtonComponent text="Сообщение"/>
				</div>
			</div>


			<div className="department">
				<TitleComponent text = "Отдел менеджмента"/>
				<div className="info">
					<span>Количество менеджеров 8/10</span>
					<ButtonComponent text="Сообщение"/>
				</div>
			</div>


			<div className="department">
				<TitleComponent text = "Отдел менеджмента"/>
				<div className="info">
					<span>Количество менеджеров 8/10</span>
					<ButtonComponent text="Сообщение"/>
				</div>
			</div>


			<div className="department">
				<TitleComponent text = "Отдел менеджмента"/>
				<div className="info">
					<span>Количество менеджеров 8/10</span>
					<ButtonComponent text="Сообщение"/>
				</div>
			</div>
		</div>
	);
}

export default Departments;
