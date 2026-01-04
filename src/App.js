import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [salary, setSalary] = useState(0);

  // Add expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const spent = expenses.reduce((total, e) => total + e.amount, 0);
  const remaining = salary - spent;

  return (
    <div className="app">
      <h1>💰 Expense Tracker</h1>

      <div className="summary">
        <p><b>Salary:</b> ₹{salary}</p>
        <p><b>Spent:</b> ₹{spent}</p>
        <p><b>Remaining:</b> ₹{remaining}</p>
      </div>

      <ExpenseForm addExpense={addExpense} setSalary={setSalary} />

      <ExpenseList expenses={expenses} />

      {expenses.length > 0 && <ExpenseChart expenses={expenses} />}
    </div>
  );
}

export default App;
