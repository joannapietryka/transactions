import React from "react";
import { useSelector } from "react-redux";

const SumOfTransactions = props => {
  const transactions = useSelector(state => state.transactions);
  return (
    <p>
      Suma wszystkich transakcji:&nbsp;
      {transactions.reduce((sum, number) => sum + parseInt(number.amount), 0)}
      &nbsp;PLN
    </p>
  );
};

export default SumOfTransactions;
