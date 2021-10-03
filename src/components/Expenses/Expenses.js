import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  function dropdownYearHandler(year) {
    setSelectedYear(year);
    console.log(year);
  }
  const filteredList = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No Expenses to show.</p>;

  if (filteredList.length > 0) {
    expensesContent = filteredList.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onDropdownChange={dropdownYearHandler}
      ></ExpensesFilter>
      {expensesContent}
    </Card>
  );
}

export default Expenses;
