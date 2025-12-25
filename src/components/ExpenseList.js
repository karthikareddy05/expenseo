import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div>
      {expenses.length === 0 && <p>No expenses added</p>}

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
