import { getTransactions } from "../../common/utils/getTransactions.js";
import { renderEmptyMessage } from "../../common/ui/emptyMessage.js";
import { sortByTimestamp } from "../utils/sortByTimestamp.js";
import { MAP_CATEGORIES_TO_COLOR, MAP_CATEGORIES_TO_ICON } from "../constants.js";
import { formatAmount } from "../../common/utils/formatAmount.js";
import { formatDate } from "../../common/utils/formatDate.js";

export const renderList = () => {
    const container = document.getElementById('transaction-list');

    const transactions = getTransactions();

    const sortedTransactions = sortByTimestamp(transactions);

    container.innerHTML = `
    ${sortedTransactions.length > 0 ? `<p class="text-gray-500 font-light mt-1">You've made ${sortedTransactions.length} transactions.</p>` : ''}
    ${sortedTransactions.length > 0 ? `<ul class="mt-3 overflow-y-auto flex-1 space-y-3">${sortedTransactions.reduce((all, current) => all + renderItem(current), "")}</ul>` : renderEmptyMessage('Your transactions will appear here.')}
    `;
};

export const renderItem = ({ category, description, amount, timestamp }) => {
    const el = document.createElement("li");

    el.innerHTML = `
        <div class="flex items-center gap-2 justify-between">
            <div class="flex items-center gap-3">
                <div class="rounded-full p-2 w-fit" style="background-color: ${MAP_CATEGORIES_TO_COLOR[category]};">
                    <img src="${MAP_CATEGORIES_TO_ICON[category]}" alt="${category}"/>
                </div>
                <div>
                    <p class="font-medium">${description}</p>
                    <p class="font-light text-gray-400 text-sm">${formatDate(timestamp)}</p>
                </div>
            </div>
            <div class="font-semibold">${formatAmount(amount)}</div>
        </div>
    `;

    return el.outerHTML;
};
