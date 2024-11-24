import { renderDrawer } from "./modules/transactions/ui/drawer.js";
import { renderCards } from "./modules/metrics/ui/cards.js";

document.addEventListener("DOMContentLoaded", () => {
    renderDrawer();
    renderCards();
});