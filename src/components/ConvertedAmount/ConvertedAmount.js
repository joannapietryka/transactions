import React from "react";
import { useSelector } from "react-redux";

const ConvertedAmount = props => {
  const rate = useSelector(state => state.rate);
  return <>{props.amount > 0 && (props.amount * rate).toFixed(2)}</>;
};

export default ConvertedAmount;
