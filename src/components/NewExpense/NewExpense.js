import { useState } from 'react'
import { ExpenseForm } from './ExpenseForm'
import './NewExpense.css'

export const NewExpense = ({onAddExpense}) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        onAddExpense(expenseData);
    }

    const startEditingHandler = (event) => {
        setIsEditing(true);
    }

    const stopEditingHandler = (event) => {
        setIsEditing(false);
    }

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler} type='submit'>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} stopEditingHandler={stopEditingHandler}/>}
        </div>
    )
}