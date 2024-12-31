import { renderDrawer } from "./modules/transactions/ui/drawer.js";
import { renderCards } from "./modules/metrics/ui/cards.js";
import { renderList } from "./modules/transactions/ui/list.js";
import { renderDeleteButton } from "./modules/transactions/ui/deleteButton.js";
import { renderChart } from "./modules/transactions/ui/chart.js";

const render = () => {
    renderCards();
    renderList();
    renderChart();
};

document.addEventListener("DOMContentLoaded", () => {
    renderDeleteButton(render);
    renderDrawer(render);
    render();
});