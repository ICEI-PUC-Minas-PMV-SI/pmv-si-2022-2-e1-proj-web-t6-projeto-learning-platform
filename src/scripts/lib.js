/**
 * Função que verifica a página carregada e adiciona
 * a classe "active" ao item do menu principal para
 * indicar qual a página atual.
 */
window.updateMainMenuActiveStatus = function () {
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
};

/***
 * Função que adiciona uma classes ao body da página dependendo
 * do contexto de tela:
 *
 * .gr-mobile para telas > 768px
 * .gr-tablet para telas >= 768px e < 992
 * .gr-desktop para telas >= 992
 *
 * Isso facilita algumas das customizações necessárias
 * para a responsividade da plataforma.
 */
window.updateHeaderState = function () {
    const body = document.querySelector("body");

    const updateBodyContext = function () {
        // Tela mobile < 768px
        if (window.innerWidth < 768) {
            body.classList.remove("gr-tablet");
            body.classList.remove("gr-desktop");
            body.classList.add("gr-mobile");

            // Tela tablet >= 768px & < 992px
        } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
            body.classList.remove("gr-mobile");
            body.classList.remove("gr-desktop");
            body.classList.add("gr-tablet");

            // Tela desktop > 992px
        } else {
            body.classList.remove("gr-mobile");
            body.classList.remove("gr-tablet");
            body.classList.add("gr-desktop");
        }
    };

    window.addEventListener("resize", updateBodyContext);

    updateBodyContext();
};

/**
 *
 */
window.toggleMobileSearch = function () {
    const search = document.querySelector(".gr-main-search");
    const trigger = search.querySelector("form > button");
    const closeTrigger = document.querySelector(".gr-main-search > div > .btn");

    const toggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        search.classList.toggle("gr-opened");
    };

    window.addEventListener("resize", (e) => {
        if (window.innerWidth >= 992) {
            search.classList.remove("gr-opened");
            trigger.removeEventListener("click", toggle);
            closeTrigger.removeEventListener("click", toggle);
        } else {
            trigger.addEventListener("click", toggle);
            closeTrigger.addEventListener("click", toggle);
        }
    });
};

/**
 * Encontra o um elemento pai, dado seu nome de tag
 *
 * @param {HTMLElement} element
 * @param {string} parentName
 * @returns {(null|HTMLElement)}
 */
window.findParentByName = function (element, parentName) {
    if (!element.parentElement) {
        return null;
    }

    const tagName = element.parentElement.tagName.toLowerCase();

    if (tagName === "body") {
        return null;
    }

    if (tagName === parentName) {
        return element.parentElement;
    }

    return findParentByName(element.parentElement, parentName);
};

window.scrolToSection = function () {
    // Encontre todos os botões (Seta) na página
    const triggers = document.querySelectorAll(".gr-section-nav-button a");

    // para cada botão encontrado
    triggers.forEach((trigger) => {
        // Adicione o evento click
        trigger.addEventListener("click", (e) => {
            // Quando clicado:
            // Previna o comportamento padrão do elemto
            e.preventDefault();
            // Pare a propagação do evento na arvore do html
            e.stopPropagation();
            // Encontra o elemento 'section' pai do botão clicado
            const parentSection = findParentByName(e.target, "section");

            // Se a seção pai e a próxima seção existirem
            if (parentSection && parentSection.nextElementSibling) {
                // Scroll para a próxima seção
                parentSection.nextElementSibling.scrollIntoView({
                    behavior: "smooth", // Usa transição para o scroll
                    block: "start", // Alinhe a próxima seção no topo da window
                });
            }
        });
    });
};
