import React from "react";
import { removeTransaction } from "../../actions/actions";
import { useDispatch } from "react-redux";
import ConvertedAmount from "../ConvertedAmount/ConvertedAmount";

const Transaction = ({ title, amount, id }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{title}</td>
      <td>{amount}</td>
      <td>
        <ConvertedAmount amount={amount} />
      </td>
      <td>
        <button onClick={() => dispatch(removeTransaction(id))}>Usuń</button>
      </td>
    </tr>
  );
};

export default Transaction;
