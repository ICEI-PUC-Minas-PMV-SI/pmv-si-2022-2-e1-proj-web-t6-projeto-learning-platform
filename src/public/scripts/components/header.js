function MobileSearch() {
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

/**
 * Função que verifica a página carregada e adiciona
 * a classe "active" ao item do menu principal para
 * indicar qual a página atual.
 */
function HeaderMenu() {
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

export function Header() {
    MobileSearch();
    HeaderMenu();
}
