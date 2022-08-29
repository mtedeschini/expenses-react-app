import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState, useEffect } from "react";

export default function Expenses({ data }) {
	
	const [filteredData, setFilteredData] = useState(data);
	const [filteredYear, setFilteredYear] = useState('all');

	const onChange = (year) => {
		setFilteredYear(year)
	};

	useEffect(()=>{
		setFilteredData(
			data.filter((expense) => {
				let date = new Date(expense.date);
				return filteredYear === "all"
					? data
					: date.getFullYear().toString() === filteredYear
			})
		);
	}, [data, filteredYear])

	return (
		<>
			<ExpensesFilter onChange={onChange} selected={filteredYear}/>
			<Card className="expenses">
				{filteredData.map((item) => {
					return (
						<ExpensesItem
							key={item.id}
							title={item.title}
							price={item.amount}
							date={new Date(item.date)}
						/>
					);
				})}
			</Card>
		</>
	);
}
