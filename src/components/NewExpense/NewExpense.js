import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [collapsed, setCollapsed] = useState(true);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random() };
    props.onAddExpense(expenseData);
    setCollapsed(true);
  }

  function collapseHandler() {
    setCollapsed(true);
  }
  function uncollapseHandler() {
    setCollapsed(false);
  }

  return (
    <div className="new-expense">
      {collapsed && (
        <button onClick={uncollapseHandler}>Add New Expense</button>
      )}
      {!collapsed && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={collapseHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
