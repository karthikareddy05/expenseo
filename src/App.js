import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
  const [salary, setSalary] = useState("");
  const [expenses, setExpenses] = useState([]);

  // Load data
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
    const savedSalary = localStorage.getItem("salary");

    if (savedExpenses) setExpenses(savedExpenses);
    if (savedSalary) setSalary(savedSalary);
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("salary", salary);
  }, [expenses, salary]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const totalSpent = expenses.reduce(
    (total, item) => total + item.amount,
    0
  );

  const remaining = salary - totalSpent;

  return (
    <div className="container">
      <h2>💰 Expense Tracker</h2>

      

      <h3>Salary: ₹{salary || 0}</h3>
      <h3>Spent: ₹{totalSpent}</h3>
      <h3>Remaining: ₹{remaining >= 0 ? remaining : 0}</h3>

      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <ExpenseChart expenses={expenses} />

    </div>
  );
}

export default App;
