# Grimore

## Instalação do Site

A plataforma é static e pode ser instalada em qualquer servidor web, basta exportar o conteúdo da past `./dist` para o servidor.


## Desenvolvimento

A plataforma utiliza o builder `parcel` junto com `handlebars` em seus arquivos fonte, para inicializar o servidor com hot reloading de desenvolvimento, rode o comando abaixo em seu terminal, partindo do root do projeto:
```
npm start
```

Isto irá iniciar seu servidor de testes na url [http://localhost:1234](http://localhost:1234), abra está url em seu browser, toda alteração que for feita no código fonte, será atualizada automaticamente nesta url.


## Conceitos de desenvolvimento

Utilizamos o Handlebars para evitar o repetimento continuo de código, a plataforma contém mais de 30 páginas, sem o Handlebars, a manutenção do código seria mais complexa e mais propensa a erros.

O Handlebars trás 3 conceitos principais e largamente utilizados na plataforma:

### Dados

Com handlebars é possível separar as responsabilidades em arquivos e pastas dedicadas, tornando nosso código fonte mais limpo e coerente. Com isso, os dados das páginas ficam localizados em arquivos `.json` na pasta dados, e estão disponíveis em qualquer layout, bloco ou páginas do código.

A utilização destes dados começa por criar seu arquivo de dados dentro da pasta dados:
```json
// Arquivo: ./dados/usuario.json
{
    "nome": "John",
    "sobrenome": "Doe"
}
```

Com seu arquivo de dados criado, utilize os dados em uma de suas páginas, layouts ou blocos como abaixo:
```handlebars
{{#block "custom"}}
    <h2>{{usuario.nome}} {{usuario.sobrenome}}<h2>
{{/block}}
```



### Páginas

Páginas são os pontos de entrada da plataforma, e devem ser criadas dentro da pasta `pages`. A única página fora da pasta `pages` é a home, que é representada pelo arquivo `./src/index.hbs`, toda e qualquer outra página deve ser criada dentro da pasta pages, utilizando uma estrutura de sub-pastas coeerentes a navegação do site, ex:

```
./src/pages/dashboard.hbs
./src/pages/dashboard/concluidos.hbs
./src/pages/dashboard/salvos.hbs
./src/pages/dashboard/notas.hbs
./src/pages/planos/novo.hbs
./src/pages/planos/novo/categoria.hbs
./src/pages/planos/novo/tecnologia.hbs
./src/pages/planos/novo/tempo.hbs
./src/pages/planos/novo/confirmacao.hbs
./src/pages/planos/novo/precessando.hbs
...
```

### Layouts

Layouts são esqueletos de páginas, contendo apenas o html, css e javascript que são comuns em várias páginas, layouts são o principal block de construção de páginas, ele contem toda a estrutura html básica incluindo a tag html, head, body, ele já tem as chamadas necessárias para os arquivos do Bootstrap, além dos estilos e scripts básicos da plataforma.

Ao criar uma nova página na pasta `pages`, é necessário que extenda um dos layouts disponíveis na pasta `./layouts` como no exemplo abaixo:

```handlebars
{{#extend "default"}}

{{/extend}}
```

Com o código acima, todo conteúdo de layout `./layouts/default.hbs` será renderizado em sua nova página, e tudo o que tem que fazer é customizar seus blocos.

```handlebars
{{#extend "default"}}
    <!-- Ao utilizar o bloco #content, substituimos o conteúdo do bloco "main" do layout "default". -->
    {{#content "main"}}
        <p class="text-white">Customizar Conteudo</p>
    {{/content }}
    
{{/extend}}
```


### Parciais

Parciais são pedaços de html, uma pequena parte de uma página em um arquivo independente, que pode ser re-utilizado em vários layouts. Novas parciais devem ser salvas na pasta `./partials`, e seu conteúdo deve sempre começar com a declaração de nome do bloco:

```handlebars
<!-- Arquivo: ./partials/my-block.hbs -->
{{#block "my-block"}}
    <!-- Insira aqui o HTML deste bloco -->
{{/block}}
```

Uma vez criada uma parcial, ela pode ser importada em qualquer layout, outras parcias, e páginas utilizando a tag `#embed` da seguinte maneira:

```handlebars
{{#extend "default"}}
    {{#content "main"}}
        <!-- O conteúdo do bloco "main" do layout "default", será substituído pelo conteúdo de sua nova parcial "my-block". -->
        {{#embed "my-block"}}{{/embed}}
    {{/content }}
    
{{/extend}}
```


### Helpers

Helpers são exxtremamente úteis na formatação de conteúdo, como converter textos para caixa alta ou baixa, customizar html, e facilitar a criação de estruturas complexas.

