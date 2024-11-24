import { addTransaction } from "../utils/addTransaction.js";
import { createTransaction } from "../utils/createTransaction.js";

export const renderForm = (onSubmit) => {
    const form = document.getElementById('transaction-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const transaction = createTransaction(Object.fromEntries(formData.entries()));

        addTransaction(transaction);

        e.target.reset();

        onSubmit?.();
    });
};
