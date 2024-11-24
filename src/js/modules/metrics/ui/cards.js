import { getMetrics } from "../utils/getMetrics.js";
import { formatAmount } from "../../common/utils/formatAmount.js";

const mapMetricToLabel = {
    income: 'Total income',
    expenses: 'Total expenses',
    remaining: 'Remaining balance',
};

export const renderCards = () => {
    const cardsContainer = document.getElementById('metrics');

    const metrics = getMetrics();

    const metricEntries = Object.entries(metrics);

    cardsContainer.innerHTML = metricEntries.reduce((total, [key, value]) => total + renderCard(mapMetricToLabel[key], value), "");
};


const renderCard = (title, amount) => {
    const card = document.createElement("div");
    card.className = "flex-1 rounded-xl p-6 border shadow";
    card.innerHTML = `
        <h2 class="text-sm font-semibold">${title}</h2>
        <p class="text-3xl font-bold">${formatAmount(amount)}</p>
    `;

    return card.outerHTML;
};