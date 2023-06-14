import Card from '../UI/Card'
import './Expenses.css';
import { ExpensesFilter } from "./ExpensesFilter";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList";

const Expenses = ({ expenses }) => {

    const [filteredYear, setYearFilter] = useState('2020');

    const filterChangeHandler = (event) => {
        setYearFilter(event.target.value)
    }

    const filteredExpenses = expenses.filter(({ date }) => {
        return new Date(date).getFullYear() === Number(filteredYear);
    })

    return (
        <div>
            <ExpensesFilter onApplyFilter={filterChangeHandler} selectedFilter={filteredYear}/>
            <Card className="expenses"><ExpensesList expenses={filteredExpenses}/></Card>
        </div>
    )

}

export default Expenses;