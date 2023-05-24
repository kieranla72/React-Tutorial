import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {

    const dateInDateFormat = new Date(date);

    const month = dateInDateFormat.toLocaleString('default', { month: 'long' })
    const day = dateInDateFormat.toLocaleString('default', { day: '2-digit' })
    const year = dateInDateFormat.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;