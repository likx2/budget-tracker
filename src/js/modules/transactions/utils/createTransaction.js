export const createTransaction = (userInput) => ({
    ...userInput,
    amount: +userInput.amount,
    timestamp: Date.now()
});