import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const categories = ["Shopping", "Grocery", "Bills", "Food", "Travel"];

  const dataValues = categories.map(category =>
    expenses
      .filter(e => e.category === category)
      .reduce((sum, e) => sum + e.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        data: dataValues,
        backgroundColor: [
          "#f4a261",
          "#2a9d8f",
          "#e76f51",
          "#e9c46a",
          "#264653"
        ]
      }
    ]
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h3>Expense Breakdown</h3>
      <Doughnut data={data} />
    </div>
  );
}

export default ExpenseChart;
