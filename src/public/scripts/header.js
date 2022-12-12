function initMobileSearch() {
    const search = $(".gr-search-bar");
    const trigger = $("header .gr-search-btn");
    const closeTrigger = $(".gr-search-close", search);

    const toggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        search.toggleClass("gr-opened");
    };

    const detach = () => {
        search.removeClass("gr-opened");
        trigger.off("click", toggle);
        closeTrigger.off("click", toggle);
    };

    const attach = () => {
        trigger.on("click", toggle);
        closeTrigger.on("click", toggle);
    };

    let attached = false;

    $(window).on("resize", (e) => {
        const isMobile = window.outerWidth < 1200;

        if (isMobile && !attached) {
            attach();
            attached = true;
        }

        if (!isMobile && attached) {
            detach();
            attached = false;
        }
    });

    attach();
}

function initDropMenu() {
    const search = $(".gr-search-bar");
    const menu = $(".gr-drop-menu");
    const container = $(".gr-drop-menu-container");
    const exploreBtn = search.find(".gr-explore-btn");
    const categories = container.find("div:first-child [data-target]");

    // Scroll the drop menu
    window.Scrollbar.init(document.querySelector(".drop-menu-scroll"), {
        thumbMinSize: 10,
        plugins: { horizontalScroll: false },
    });

    // Toggle drop menu
    exploreBtn.on("click", () => {
        menu.toggleClass("invisible");
    });

    // When search container closes, also close the menu if is open
    search.mutate(["class"], (values) => {
        if (values.class.indexOf("gr-opened") === -1 && !menu.hasClass("invisible")) {
            menu.toggleClass("invisible");
        }
    });

    menu.mutate(["class"], (values) => {
        if (menu.hasClass("invisible")) {
            exploreBtn.removeClass("gr-active");
        } else {
            exploreBtn.addClass("gr-active");
        }
    });

    categories.each((i, category) => {
        $(category).on("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            categories.each((i, cat) => $(cat).removeClass("gr-active"));

            $(category).addClass("gr-active");
        });
    });

    // Close the menu if the window get's resized below 1200px
    $(window).on("resize", (e) => {
        if (!menu.hasClass("invisible")) {
            menu.addClass("invisible");
            exploreBtn.removeClass("gr-active");
        }
    });
}

/**
 * Função que verifica a página carregada e adiciona
 * a classe "active" ao item do menu principal para
 * indicar qual a página atual.
 */
function initHeaderMenu() {
    // Retira a última parte da URL atual para saber qual a página atual carregada (ex: sobre.html)
    const page = `/${location.pathname.split("/").pop()}`;

    // Seleciona todos as tags "a" do menu principal
    const menuItems = document.querySelectorAll("#gr-navbar-collapse ul > li > a");

    // Passa por cada uma delas, verificando qual é a ativa
    menuItems.forEach((element) => {
        const url = new URL(element.href);
        // Se a tag "a" contém o nome da página atual em seu atributo href
        // adcionamos uma classe de nome "active"
        if (url.pathname === page) {
            element.classList.add("active");
            // Caso contrário, removemos a classe "active" da tag "a"
        } else {
            element.classList.remove("active");
        }
    });
}

export function initHeader() {
    initMobileSearch();
    initDropMenu();
    initHeaderMenu();
}
