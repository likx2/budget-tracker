import { renderDrawer } from "./modules/transactions/ui/drawer.js";
import { renderCards } from "./modules/metrics/ui/cards.js";
import { renderList } from "./modules/transactions/ui/list.js";
import { renderDeleteButton } from "./modules/transactions/ui/deleteButton.js";

document.addEventListener("DOMContentLoaded", () => {
    renderDeleteButton();
    renderDrawer();
    renderCards();
    renderList();
});