import {
  CONVERT_CURRENCY,
  ADD_TRANSACTION,
  REMOVE_TRANSACTION
} from "../constants/action-types";

const initialState = {
  transactions: [],
  rate: 4.23
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONVERT_CURRENCY:
      const newState = {
        ...state,
        rate: action.payload ? action.payload : ""
      };
      return newState;
    case ADD_TRANSACTION:
      const transactions = [...state.transactions];
      transactions.push(action.payload);
      return { ...state, transactions };
    case REMOVE_TRANSACTION:
      const filteredTransactions = [...state.transactions].filter(
        transaction => transaction.id !== action.payload
      );
      return { ...state, transactions: filteredTransactions };
    default:
      return state;
  }
};

export default rootReducer;
