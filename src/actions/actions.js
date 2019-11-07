import {
  CONVERT_CURRENCY,
  ADD_TRANSACTION,
  REMOVE_TRANSACTION
} from "../constants/action-types";

export function convertCurrency(payload) {
  return { type: CONVERT_CURRENCY, payload };
}

export function addTransaction(payload) {
  return { type: ADD_TRANSACTION, payload };
}

export function removeTransaction(payload) {
  return { type: REMOVE_TRANSACTION, payload };
}
