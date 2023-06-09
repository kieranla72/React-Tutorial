import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css';
import { ExpensesFilter } from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ expenses }) => {

    const [filteredYear, setYearFilter] = useState('2020');

    const filterChangeHandler = (event) => {
        setYearFilter(event.target.value)
        console.log(`The following year filter was selected: ${event.target.value}`);
    }
    

    return (
        <div>
            <ExpensesFilter onApplyFilter={filterChangeHandler} selectedFilter={filteredYear}/>
            <Card className="expenses">
                {expenses.map(({title, amount, date, id}) => (
                    <ExpenseItem
                        title={title} 
                        amount={amount} 
                        date={date}
                        key={id}
                    ></ExpenseItem>
                ))}
            </Card>
        </div>
    )

}

export default Expenses;