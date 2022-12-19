export function DropMenuComponent() {
    const search = $(".gr-search-bar");
    const menu = $(".gr-drop-menu");
    const exploreBtn = search.find(".gr-explore-btn");
    const categories = menu.find("a[data-area]");
    const qInput = search.find("input[name=q]");
    const areaInput = search.find("input[name=area]");

    const AREA = "area";
    const ACTIVE_CLASS = "gr-active";

    // Scroll the drop menu
    window.Scrollbar.init(document.querySelector(".drop-menu-scroll"), {
        thumbMinSize: 10,
        plugins: { horizontalScroll: false },
    });

    // In mobile screens, when search container closes, also close the menu if is open
    search.mutate(["class"], (values) => {
        if (!search.hasClass("gr-opened")) {
            menu.removeClass(ACTIVE_CLASS);
        }
    });

    // Open a closes the drop menu
    exploreBtn.mutate(["class"], () => {
        if (exploreBtn.hasClass(ACTIVE_CLASS)) {
            menu.addClass(ACTIVE_CLASS);
        } else {
            menu.removeClass(ACTIVE_CLASS);
        }
    });

    // Toggle drop menu
    exploreBtn.on("click", function () {
        $(this).toggleClass(ACTIVE_CLASS);
    });

    //
    categories.on("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        $.pushState({ area: $(e.target).data(AREA) });
        exploreBtn.removeClass(ACTIVE_CLASS);
        qInput.trigger("focus");
    });

    // Close the menu if the window get's resized below 1200px
    $(window).on("resize", (e) => {
        if (exploreBtn.hasClass(ACTIVE_CLASS)) {
            exploreBtn.removeClass(ACTIVE_CLASS);
        }
    });

    // Update form state when query params change
    $.stateChange((query) => {
        areaInput.val(query.get(AREA));

        exploreBtn[0].classList.forEach((className) => {
            if (className.startsWith("btn-")) {
                exploreBtn.removeClass(className);
            }
        });

        exploreBtn.addClass(`btn-${query.get(AREA) || "black"}`);
    });
}
