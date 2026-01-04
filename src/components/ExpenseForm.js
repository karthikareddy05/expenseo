import { useState } from "react";

function ExpenseForm({ addExpense, setSalary }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Shopping");
  const [salaryInput, setSalaryInput] = useState("");

  const handleAddExpense = () => {
    if (!amount) return;

    addExpense({
      id: Date.now(),
      title: category,
      amount: Number(amount),
    });

    setAmount("");
  };

  const handleSetSalary = () => {
    if (!salaryInput) return;
    setSalary(Number(salaryInput));
    setSalaryInput("");
  };

  return (
    <div className="form">
      {/* SALARY INPUT */}
      <input
        type="number"
        placeholder="Enter Salary"
        value={salaryInput}
        onChange={(e) => setSalaryInput(e.target.value)}
      />

      <button onClick={handleSetSalary}>
        Set Salary
      </button>

      <hr />

      {/* EXPENSE INPUT */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Shopping</option>
        <option>Food</option>
        <option>Bills</option>
        <option>Travel</option>
        <option>Grocery</option>
      </select>

      <button onClick={handleAddExpense}>
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseForm;
