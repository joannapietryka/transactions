import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTransaction } from "../../actions/actions";
import Transaction from "../Transaction/Transaction";
import { Input, Table } from "./style";

const TransactionsList = props => {
  const [values, setValues] = useState({ title: "", amount: "" });
  const transactions = useSelector(state => state.transactions);
  const dispatch = useDispatch();
  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <div>
        <p>Wpisz dane transakcji:</p>
        <Input
          type="text"
          name="title"
          placeholder="Podaj nazwę transakcji"
          value={values.title}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="amount"
          placeholder="Podaj kwotę transakcji w EUR"
          value={values.amount}
          onChange={handleChange}
        />
        EUR&nbsp;
        <button
          disabled={!values.title || !values.amount}
          onClick={() => {
            dispatch(
              addTransaction({
                title: values.title,
                amount: values.amount,
                id: Math.random() * 1000000
              })
            );
            setValues({ title: "", amount: "" });
          }}
        >
          Dodaj
        </button>
      </div>
      {transactions.length > 0 && (
        <Table>
          <tbody>
            <tr>
              <th>Nazwa transakcji</th>
              <th> EUR</th>
              <th> PLN</th>
              <th>X</th>
            </tr>
            {transactions.map(transaction => (
              <Transaction {...transaction} key={transaction.id} />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default TransactionsList;
