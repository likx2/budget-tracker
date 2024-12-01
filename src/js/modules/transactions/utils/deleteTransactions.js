import { TRANSACTIONS_KEY } from "../constants.js";

export const deleteTransactions = () => {
    localStorage.removeItem(TRANSACTIONS_KEY);
};