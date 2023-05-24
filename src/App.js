import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.69, date: new Date(2022, 7, 15).toISOString() },
    { id: 'e2', title: 'Rent', amount: 700, date: new Date(2022, 7, 14).toISOString() },
    { id: 'e3', title: 'Energy', amount: 100, date: new Date(2022, 7, 13).toISOString() },
    { id: 'e4', title: 'Internet', amount: 50, date: new Date(2022, 7, 18).toISOString() },
  ];

  return (
    <div>
      <h2>Let's get started and build an app!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
