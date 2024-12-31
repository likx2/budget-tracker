export const categoryToAmount = (transactions) => transactions.reduce((map, { category, amount }) => {
    if (map.has(category)) {
        map.set(category, map.get(category) + amount);
    } else {
        map.set(category, amount);
    }

    return map;
}, new Map);