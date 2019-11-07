import React from "react";
import { TransactionsDashboardWrapper } from "./style";
import TransactionsList from "../TransactionsList/TransactionsList";
import CurrencyRate from "../CurrencyRate/CurrencyRate";
import HighestTransaction from "../HighestTransaction/HighestTransaction";
import SumOfTransactions from "../SumOfTransactions/SumOfTransactions";

const TransactionsDashboard = () => {
  return (
    <div className="main-wrapper">
      <TransactionsDashboardWrapper>
        <TransactionsList />
      </TransactionsDashboardWrapper>
      <TransactionsDashboardWrapper>
        <CurrencyRate />
        <HighestTransaction />
        <SumOfTransactions />
      </TransactionsDashboardWrapper>
    </div>
  );
};

export default TransactionsDashboard;
