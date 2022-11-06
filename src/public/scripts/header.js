function initMobileSearch() {
    const search = $(".gr-search-bar");
    const trigger = $(".gr-search-btn", search);
    const closeTrigger = $(".gr-search-bar-back-btn", search);

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
        const isMobile = window.outerWidth < 768;

        if (isMobile && !attached) {
            attach();
        }

        if (!isMobile && attached) {
            detach();
        }
    });

    attach();
}

function initDropMenu() {
    const search = $(".gr-search-bar");
    const menu = $(".gr-floating-menu");
    const container = $(".gr-drop-menu-container");
    const exploreBtn = search.find(".gr-search-bar-explore-btn");
    const categories = container.find("div:first-child [data-target]");
    const backBtn = $(".gr-drop-menu-back-btn");
    const menuSubTitle = $(".gr-drop-menu-sub-title");

    exploreBtn.on("click", () => {
        menu.toggleClass("invisible");
    });

    search.mutate(["class"], (values) => {
        if (values.class.indexOf("gr-opened") === -1 && !menu.hasClass("invisible")) {
            menu.toggleClass("invisible");
        }
    });

    menu.mutate(["class"], (values) => {
        if (menu.hasClass("invisible")) {
            $(".gr-sub-category").removeClass("gr-active");
            exploreBtn.removeClass("gr-active");
        } else {
            exploreBtn.addClass("gr-active");
        }
    });

    $(window).on("resize", (e) => {
        if (e.currentTarget.innerWidth < 978 && !menu.hasClass("invisible")) {
            menu.toggleClass("invisible");
        }
    });

    categories.each((i, category) => {
        $(category).on("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            categories.each((i, cat) => $(cat).removeClass("gr-active"));

            $(category).addClass("gr-active");

            const targetClass = `.gr-sub-category.${$(category).data("target")}`;

            $(".gr-sub-category").removeClass("gr-active");
            $(targetClass).addClass("gr-active");

            menuSubTitle.html(
                menuSubTitle
                    .data("title")
                    .replace("%s", `<a href="/">${$(category).data("label")}</a>`)
            );
        });
    });

    backBtn.on("click", () => {
        $(".gr-sub-category.gr-active").toggleClass("gr-active");
    });
}

/**
 * Função que verifica a página carregada e adiciona
 * a classe "active" ao item do menu principal para
 * indicar qual a página atual.
 */
function initHeaderMenu() {
    // Retira a última parte da URL atual para saber qual a página atual carregada (ex: sobre.html)
    const page = location.pathname.split("/").pop();

    // Seleciona todos as tags "a" do menu principal
    const menuItems = document.querySelectorAll("#gr-navbar-collapse ul > li > a");

    // Passa por cada uma delas, verificando qual é a ativa
    menuItems.forEach((element) => {
        // Se a tag "a" contém o nome da página atual em seu atributo href
        // adcionamos uma classe de nome "active"
        if (element.href.endsWith(page)) {
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