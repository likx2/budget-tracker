import { deleteTransactions } from "../utils/deleteTransactions.js";

export const renderDeleteButton = () => {
  const clearButtonEl = document.getElementById('clear-button');

  clearButtonEl.addEventListener('click', deleteTransactions);
};