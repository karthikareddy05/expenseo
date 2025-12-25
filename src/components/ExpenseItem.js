import React from "react";

function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="item">
      <div>
        <strong>{expense.title}</strong>
        <p>{expense.category}</p>
      </div>

      <div>
        <span>₹{expense.amount}</span>
        <button onClick={() => deleteExpense(expense.id)}>❌</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
