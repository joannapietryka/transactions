import React from "react";
import { useSelector } from "react-redux";
import ConvertedAmount from "../ConvertedAmount/ConvertedAmount";

const HighestTransaction = props => {
  const transactions = useSelector(state => state.transactions);
  const highest =
    transactions.length > 0 &&
    transactions.reduce((prev, current) =>
      prev.amount > current.amount ? prev : current
    );
  return (
    <>
      {transactions.length > 0 && (
        <p>
          Największa transakcja: <br />
          Nazwa: {highest.title}
          <br />
          Kwota EUR:&nbsp;
          {highest.amount}
          <br />
          Kwota PLN: <ConvertedAmount amount={highest.amount} />
        </p>
      )}
    </>
  );
};

export default HighestTransaction;
