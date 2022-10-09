# Styles

Os estilos da plataforma usam como base o Bootstrap 5, que é carregado via `link` e `script` tags no layout `src/layouts/default.hbs`.

Já os estilos específicos da plataforma, utilizam `Sass` como pré-processador e estão centralizados no arquivo `./src/styles/style.scss`.

Pra organização e separação de responsabilidades, eles foram quebrados em algumas parciais, que são importadas pelo arquivo `style.scss`, que são:

1. **_mixins.scss** Arquivo com `mixins` (funções e helpers).
2. **_variables.scss** Arquivo com a declaração de variávais CSS, tanto as que sobrepôem variaveis do Bootstrap, quanto novas variáveis onde cada uma delas ustiliza o prefixo `--gr-` no nome para diferênciar das do Bootstrap.
3. **_overwrites.scss** Arquivo com declarações que sobrepôem declarações do Bootstrap, como customização de botões e formulários.
4. **_utilities.scss** Arquivo com classes de utilidade que criadas especificamente a plataforma que não sobrepôem declarações do Bootstrap.

Não criar novos arquivos a não ser que seu contaúdo não seja coerente com nenhum dos arquivos acima.


