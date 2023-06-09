// import Expenses from "./components/Expenses/Expenses";
// import { NewExpense } from "./components/NewExpense/NewExpense";

// const App = () => {
//   const expenses = [
//     { id: 'e1', title: 'Car Insurance', amount: 294.69, date: new Date(2022, 7, 15).toISOString() },
//     { id: 'e2', title: 'Rent', amount: 700, date: new Date(2022, 7, 14).toISOString() },
//     { id: 'e3', title: 'Energy', amount: 100, date: new Date(2022, 7, 13).toISOString() },
//     { id: 'e4', title: 'Internet', amount: 50, date: new Date(2022, 7, 18).toISOString() },
//   ];

//   const addExpenseHandler = (expense) => {
//     console.log('In app.js');
//     console.log(expense);
//   }

//   return (
//     <div>
//       <NewExpense onAddExpense = {addExpenseHandler} ></NewExpense>
//       <Expenses expenses={expenses}></Expenses>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.69, date: new Date(2022, 7, 15).toISOString() },
    { id: 'e2', title: 'Rent', amount: 700, date: new Date(2022, 7, 14).toISOString() },
    { id: 'e3', title: 'Energy', amount: 100, date: new Date(2022, 7, 13).toISOString() },
    { id: 'e4', title: 'Internet', amount: 50, date: new Date(2022, 7, 18).toISOString() },
  ];

  const [existingExpenses, setExpenses] = useState(expenses)

  const addExpenseHandler = (expense) => {
    setExpenses((currentExpenses) => [
      expense,
      ...currentExpenses,
    ])
    console.log('In app.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} ></NewExpense>
      <Expenses expenses={existingExpenses}></Expenses>
    </div>
  );
}

export default App;

