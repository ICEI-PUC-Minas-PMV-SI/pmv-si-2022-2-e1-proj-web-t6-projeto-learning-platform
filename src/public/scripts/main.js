import * as components from "./components/index.js";

$(() => {
    // Add default scollbar plugins
    window.Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);

    // initialize components
    Object.keys(components).forEach((name) => {
        components[name]();
    });

    // Initialize all tooltips
    document
        .querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach((el) => new bootstrap.Tooltip(el));
});
