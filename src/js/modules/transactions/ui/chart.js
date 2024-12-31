import Chart from 'chart.js/auto';

import { getTransactions } from "../../common/utils/getTransactions.js";
import { renderEmptyMessage } from "../../common/ui/emptyMessage.js";
import { filterNegativeCategories } from "../utils/filterNegativeCategories.js";
import { sortByAmount } from "../utils/sortByAmount.js";
import { categoryToAmount } from "../utils/categoryToAmount.js";
import { createDataSet } from "../utils/createDataSet.js";
import { capitalize } from "../../common/utils/capitalize.js";

export const renderChart = () => {
  const chartContainer = document.getElementById('expenses-chart');

  const transactions = getTransactions();

  const negativeTransactions = filterNegativeCategories(transactions);

  if (negativeTransactions.length > 0) {
    displayChart(negativeTransactions, chartContainer);
  }
  else {
      chartContainer.innerHTML = renderEmptyMessage('Your expenses chart will display here.');
  }
};

const displayChart = (transactions, chartContainer) => {
  chartContainer.innerHTML = '';

  const chart = document.createElement("canvas");

  const sortedTransactions = sortByAmount(transactions);

  const mapCategoryToAmount = categoryToAmount(sortedTransactions);

  const categoryToAmountEntries = mapCategoryToAmount.entries();

  const categoryToAmountArray = Array.from(categoryToAmountEntries);

  new Chart(chart, {
    type: 'bar',
    data: {
      labels: categoryToAmountArray.map(([category]) => capitalize(category)),
      datasets: [createDataSet(categoryToAmountArray)]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });

  chartContainer.append(chart);
};