import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ data, onSave }) {
	const [newExpense, setNewExpense] = useState({
		id: "e5",
		title: "",
		amount: 0,
		date: "",
	});


	const onChangeHandler = (e) => {
		const { name, value } = e.target;

		setNewExpense((prevState) => {
			return { 
                ...prevState, [name]: name === 'amount' ? Number(value) : value ,
			};
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
        onSave(newExpense)
		setNewExpense({
			id: "e5",
			title: "",
			amount: 0,
			date: '',
		});
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="">Title</label>
					<input
						placeholder="Title"
						name="title"
						type="text"
						onChange={onChangeHandler}
						value={newExpense.title}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Amount</label>
					<input
						placeholder="Amount"
						name="amount"
						type="number"
						min="0.01"
						step="0.01"
						value={newExpense.amount}
						onChange={onChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Date</label>
					<input
						name="date"
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={newExpense.date}
						onChange={onChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}
