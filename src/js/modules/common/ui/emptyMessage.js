export const renderEmptyMessage = (message) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'w-full h-full flex justify-center items-center';
    wrapper.innerHTML = `<p class="text-gray-300 text-sm font-light">${message}</p>`;

    return wrapper.outerHTML;
};
