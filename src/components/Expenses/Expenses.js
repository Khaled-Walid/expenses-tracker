import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  function dropdownYearHandler(year) {
    setSelectedYear(year);
    console.log(year);
  }
  const filteredList = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onDropdownChange={dropdownYearHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredList} />
      <ExpensesList items={filteredList} />
    </Card>
  );
}

export default Expenses;
