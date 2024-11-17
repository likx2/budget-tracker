export const renderDrawer = () => {
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawer = document.getElementById('drawer');
    const addButton = document.getElementById('add-button');
    const closeButton = document.getElementById('close-button');

    const open = () => {
        drawerOverlay.classList.remove('hidden');
        drawer.classList.replace('translate-x-full', 'translate-x-0');
    };

    const close = () => {
        drawerOverlay.classList.add('hidden');
        drawer.classList.replace('translate-x-0', 'translate-x-full');
    };

    addButton.addEventListener('click', open);

    closeButton.addEventListener('click', close);

    document.addEventListener('click', (event) => {
        if(!drawer.contains(event.target) && !addButton.contains(event.target)) {
            close();
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'Escape' && drawer.classList.contains('translate-x-0')) {
            close();
        }
    });
};