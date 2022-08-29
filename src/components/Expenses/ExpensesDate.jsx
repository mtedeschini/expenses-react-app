import './ExpensesDate.css'

export default function ExpensesDate({ date }) {

    const day = date.toLocaleString('es-AR', {day: '2-digit'})
    const month = date.toLocaleString('es-AR', {month: 'long'}).toUpperCase()
    const year = date.getFullYear()

	return (
		<div className="expense-date">
			<div className="expense-date__day">{day}</div>
			<div className="expense-date__year">{month}</div>
			<div className="expense-date__month">{year}</div>
		</div>
	);
}
