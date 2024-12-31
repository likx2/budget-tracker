import { MAP_CATEGORIES_TO_COLOR } from "../constants.js";

export const createDataSet = (transactionEntries) => ({
    label: 'Amount',
    data: transactionEntries.map(([, amount]) => Math.abs(amount)),
    barThickness: 40,
    backgroundColor: transactionEntries.map(([category]) => MAP_CATEGORIES_TO_COLOR[category]),
    borderWidth: 1
});