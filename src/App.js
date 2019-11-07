import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { GlobalStyle } from "./style";
import TransactionsDashboard from "./components/TransactionsDashboard/TransactionsDashboard";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <TransactionsDashboard />
    </Provider>
  );
}

export default App;
