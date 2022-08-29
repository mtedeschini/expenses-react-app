import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense({ data, addExpensesHandler }) {

    const saveExpenseHandler = (newExpense) => {
        const expenseData={
            ...newExpense,
            id: Math.random().toString()
        }
        addExpensesHandler(expenseData);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm data={data} onSave={saveExpenseHandler}/>
        </div>
    )
    
};
