if (module.hot) {
    module.hot.accept(() => {
        location.reload();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateHeaderState();
    updateMainMenuActiveStatus();
    toggleMobileSearch();
});
