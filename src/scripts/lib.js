
/**
 * Função que verifica a página carregada e adiciona
 * a classe "active" ao item do menu principal para
 * indicar qual a página atual.
 */
 window.updateMainMenuActiveStatus = function() {
    console.log(`Document is ready!`);

    // Retira a última parte da URL atual para saber qual a página atual carregada (ex: sobre.html)
    const page = location.pathname.split('/').pop();

    // Seleciona todos as tags "a" do menu principal
    const menuItems = document.querySelectorAll('#gr-navbar-collapse ul > li > a')

    // Passa por cada uma delas, verificando qual é a ativa
    menuItems.forEach(element => {
        // Se a tag "a" contém o nome da página atual em seu atributo href
        // adcionamos uma classe de nome "active"
        if (element.href.endsWith(page)) {
            element.classList.add("active")
        // Caso contrário, removemos a classe "active" da tag "a"
        } else {
            element.classList.remove("active")
        }
    });
}

/**
 * Função para atualizar a classe do botão da busca principal, quando
 * o campo estiver em foco.
 * 
 * Quando estiver em foco o botão assume a cort de accent (Azul claro) e quando
 * perde o foco, valta a cor normal, feito por meio da troca das classes do
 * botão.
 */
window.updateSearchButtonState = function() {
    // Seleciono o elemento input partindo do formulário com id main-search
    const searchInput = document.querySelector('#gr-main-search input');

    // Adiciono um evento no input quando estiver em foco
    searchInput.addEventListener('focus', () => {
        // Feita a troca das classes pela classe do botão azul
        searchInput.nextElementSibling.classList.remove('btn-gr-default')
        searchInput.nextElementSibling.classList.add('btn-gr-primar-hover')
    })

    // Adiciono um evento no input quando foco sair
    searchInput.addEventListener('focusout', () => {
        // Feita a troca das classes pela classe do botão dark
        searchInput.nextElementSibling.classList.remove('btn-gr-primar-hover')
        searchInput.nextElementSibling.classList.add('btn-gr-default')
    })
}
