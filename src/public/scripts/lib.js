export function updateBodyContext() {
    const body = $("body");

    // Tela mobile < 768px
    if (window.innerWidth < 768) {
        body.removeClass("gr-tablet");
        body.removeClass("gr-desktop");
        body.addClass("gr-mobile");

        // Tela tablet >= 768px & < 992px
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        body.removeClass("gr-mobile");
        body.removeClass("gr-desktop");
        body.addClass("gr-tablet");

        // Tela desktop > 992px
    } else {
        body.removeClass("gr-mobile");
        body.removeClass("gr-tablet");
        body.addClass("gr-desktop");
    }
}

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
export function initBreakpoints() {
    window.addEventListener("resize", updateBodyContext);
    updateBodyContext();
}

export function initHomeScrollNav() {
    // Encontre todos os botões (Seta) na página
    const scrollBtns = $(".gr-section-nav-button a");

    // para cada botão encontrado
    scrollBtns.each((i, btn) => {
        // Adicione o evento click
        $(btn).on("click", (e) => {
            // Quando clicado:
            // Previna o comportamento padrão do elemto
            e.preventDefault();
            // Pare a propagação do evento na arvore do html
            e.stopPropagation();

            // Encontra o elemento 'section' pai do botão clicado
            const parentSection = $(btn).parents("section");

            // Se a seção pai e a próxima seção existirem
            if (parentSection && parentSection.next()) {
                // Scroll para a próxima seção
                parentSection.next().get(0).scrollIntoView({
                    behavior: "smooth", // Usa transição para o scroll
                    block: "start", // Alinhe a próxima seção no topo da window
                });
            }
        });
    });
}
