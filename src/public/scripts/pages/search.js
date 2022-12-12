let menuInitialized = null;

const scrollOptions = {
    thumbMinSize: 10,
    plugins: {},
};

// Init virtuals scroll plugins
window.Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);

function iniScroll(elem, horizontal = false) {
    window.Scrollbar.init(elem, {
        ...scrollOptions,
        plugins: { horizontalScroll: horizontal },
    });
}

function initTechMenu() {
    const menu = $("#gr-search-menu")[0];
    const horizontal = window.innerWidth >= 768;

    if (menuInitialized) {
        window.Scrollbar.destroy(menu);
    }

    iniScroll(menu, horizontal);

    menuInitialized = horizontal ? "column" : "row";
}

$(() => {
    const AREA_DESC_KEY = "gr-area-description";
    const sidebar = $("#gr-search-sidebar");
    const descriptionBtn = $(".btn[data-toggle]");

    iniScroll(sidebar[0]);

    // Toggle search area description
    descriptionBtn.openClose(function (active, elem) {
        elem[0].style.transform = active ? null : "rotate(180deg)";
        localStorage.setItem(AREA_DESC_KEY, active);
    });

    initTechMenu();

    // Invert tech menu scroll direction on resize
    $(window).on("resize", initTechMenu);

    // Init the search description box and save the state to local storage
    if (window.innerWidth < 768 || localStorage.getItem(AREA_DESC_KEY)) {
        $(".btn[data-toggle]").trigger("click");
    }
});
