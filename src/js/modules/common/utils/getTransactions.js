import { TRANSACTIONS_KEY } from "../../transactions/constants.js";

export const getTransactions = () => {
    return JSON.parse(localStorage.getItem(TRANSACTIONS_KEY) ?? '[]');
};