import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

export const ExpensesList = ({expenses}) => {
    if (!expenses.length) {
        return <h2 className='expenses-list_fallback'>Found no expenses</h2>
    }

    return <ul className="expenses-list">
        {expenses.map(({title, amount, date, id}) => (
            <ExpenseItem
                title={title} 
                amount={amount} 
                date={date}
                key={id}
            ></ExpenseItem>
        ))}
    </ul>
}