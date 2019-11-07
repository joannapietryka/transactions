import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { convertCurrency } from "../../actions/actions";
import { Rate } from "./style";

const CurrencyRate = props => {
  const dispatch = useDispatch();
  const rate = useSelector(state => state.rate);

  const handleChange = event => {
    dispatch(convertCurrency(event.target.value));
  };

  return (
    <Rate>
      <div className="input-wrapper">
        <p>Podaj kurs wymiany:</p>
        <input type="number" value={rate} onChange={handleChange} />
      </div>
      <p className="center">1 EUR = {rate} PLN</p>
    </Rate>
  );
};

export default CurrencyRate;
