import { TRANSACTION_CATEGORIES } from "../constants.js";

export const filterNegativeCategories = (transactions) => transactions.filter(({category}) => TRANSACTION_CATEGORIES.negative.includes(category));