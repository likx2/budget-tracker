import { getTransactions } from "../../common/utils/getTransactions.js";

export const getMetrics = () => {
    let income = 0;
    let expenses = 0;
    let remaining = 0;

    const transactions = getTransactions();

    transactions.forEach(transaction => {
       if (transaction.amount > 0) {
           income += transaction.amount;
       } else {
           expenses += transaction.amount;
       }
    });

    remaining = income + expenses;

    return {
        income,
        expenses,
        remaining,
    };
};