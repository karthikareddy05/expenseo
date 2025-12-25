import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Shopping");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount) return;

    addExpense({
      id: Date.now(),
      amount: Number(amount),
      category,
    });

    setAmount("");
    setCategory("Shopping");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Shopping</option>
        <option>Grocery</option>
        <option>Bills</option>
        <option>Food</option>
        <option>Travel</option>
      </select>

      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
