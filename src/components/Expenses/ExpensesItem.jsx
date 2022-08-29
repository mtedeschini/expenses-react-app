import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";
import { useState } from "react";

export default function ExpensesItem({ title, price, date }) {
	const [newTitle, setNewTitle] = useState(title);
	const clickHandler = () => {
		setNewTitle(newTitle === title ? 'Updated' : title);
	};
	
	return (
		<Card className="expense-item">
			<ExpensesDate date={date} />
			<div className="expense-item__description">
				<h2>{newTitle}</h2>
				<div className="expense-item__price">${price}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
}
