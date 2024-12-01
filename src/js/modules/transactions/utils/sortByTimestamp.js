export const sortByTimestamp = (transactions) => {
  return transactions.sort((first, second) => second.timestamp - first.timestamp);
};