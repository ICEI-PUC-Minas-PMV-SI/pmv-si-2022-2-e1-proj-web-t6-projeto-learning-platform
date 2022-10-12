(() => {
    if (null)
        null.accept(() => {
            location.reload();
        });
    document.addEventListener("DOMContentLoaded", () => {
        updateHeaderState();
        updateMainMenuActiveStatus();
        toggleMobileSearch();
    });
})();
