export function HomeScrollNav() {
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
