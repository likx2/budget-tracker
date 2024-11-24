import { getTransactions } from "../../common/utils/getTransactions.js";
import { TRANSACTIONS_KEY } from "../constants.js";

export const addTransaction = (transaction) => {
    const existingTransactions = getTransactions();
    localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify([...existingTransactions, transaction]));
};