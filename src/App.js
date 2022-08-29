import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App() {
	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: "2020-7-4",
		},
		{ 	
			id: "e2", 
			title: "New TV", 
			amount: 799.49, 
			date: "2021-2-2" 
		},
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: "2021-2-28",
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: "2021-5-12",
		},
	];

	const [dataArr, setDataArr] = useState(expenses)
	
	const addExpensesHandler = (expense) => {
		setDataArr((prevState) => {
			return [...prevState, expense]
		})
		console.log(dataArr)
	}

	return (
		<div className="App">
			<NewExpense addExpensesHandler={addExpensesHandler} />
			<Expenses data={dataArr} />
		</div>
	);
}

export default App;
