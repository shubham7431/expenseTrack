import Card from "../UI/Card";
import "./ExpanseItem.css";
import React from "react";

import ExpenseDate from "./ExpenseDate";
function ExpanceItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpanceItem;
