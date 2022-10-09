# Layouts

Layouts são a base de qualquer página em nossa plataforma, em geral novas páginas devem estender o layout `default.hbs`, caso a estrutura não satisfaça as necessidades um novo layout devverá ser criado nesta pasta.

Layouts utilizam o módulo [Handlebars Layouts](https://www.npmjs.com/package/handlebars-layouts), separando suas áreas por `{{#blocks "NomeDoBloco"}}{{/block}}` nomeados, que podem ser alterados posteriormente em páginas por meio da tag `{{#content "NomeDoBloco"}}Conteúdo{{}}`.

Sempre que criar um novo layout, utilize como base o layout `default.hbs` e altere o que for necessário.
