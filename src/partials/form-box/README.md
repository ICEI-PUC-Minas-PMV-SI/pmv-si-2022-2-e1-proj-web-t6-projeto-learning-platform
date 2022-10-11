# Form Box

Parcial para criação de formulários contídos por uma caixar com bordas arredondadas, como os que são utilizados nas caixas de login, cadastro e recuperação de senha.

## Como usar

```handlebars
{{#embed "form-box/tpl"}}
    {{#content "cardTitle"}}
        <!-- Título do cartão -->
    {{/content}}
    {{#content "cardContent"}}
        <!-- Conteúdo do cartão -->
    {{/content}}
    {{#content "cardButton"}}
        <!-- Título do cartão -->
    {{/content}}
    {{#content "cardExtra"}}{{/content}}
{{/embed}}
```
