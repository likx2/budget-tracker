import { deleteTransactions } from "../utils/deleteTransactions.js";

export const renderDeleteButton = (onDelete) => {
  const clearButtonEl = document.getElementById('clear-button');

  clearButtonEl.addEventListener('click', () => {
    deleteTransactions();
    onDelete();
  });
};