# Grimore

## Instalação do Site

A plataforma é static e pode ser instalada em qualquer servidor web, basta exportar o conteúdo da past `./dist` para o servidor.


## Desenvolvimento

A plataforma utiliza o builder `parcel` junto com `handlebars` em seus arquivos fonte, para inicializar o servidor de desenvolvimento com [hot reloading](https://en.parceljs.org/hmr.html), rode o comando abaixo em seu terminal, partindo do root do projeto:
```
npm start
```

Isto irá iniciar seu servidor de testes na url [http://localhost:1234](http://localhost:1234), abra está url em seu browser (isso deverá acontecer automaticamente), toda alteração que for feita no código fonte, será atualizada automaticamente nesta url.


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
    <!-- ...blocks -->
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


### Parciais (Partials)

Parciais são pedaços de html, uma pequena parte de uma página em um arquivo independente, que pode ser re-utilizado em vários layouts. Novas parciais devem ser salvas na pasta `./partials`, e seu conteúdo deve sempre começar com a declaração de nome do bloco:

```handlebars
<!-- Arquivo: ./partials/my-block.hbs -->
{{#block "my-block"}}
    <!-- Insira aqui o HTML deste bloco -->
{{/block}}
```

Uma vez criada uma parcial, ela pode ser importada em qualquer layout, outras parcias e outras páginas, utilizando a tag `#embed` da seguinte maneira:

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

Um helper é nada mais que uma função javascript em um arquivo dedicado, que recebe um contexxto e retorna conteúdo HTML em forma de uma string (texto).

Nossa plataforma já disponibiliza uma grande quantidade de helpers que podem ser usados, a lista completa pode ser conferida [aqui](https://www.npmjs.com/package/handlebars-helpers), em casos específicos que nenhum dos helpers disponíveis satisfação os requerimentos, um novo deverá ser criado na pasta `./src/helpers`.


# Flow de desenfolvimento de páginas

Com os conceitos acima entendidos, é fácil criar novas páginas em nossa plataforma, o passo a passo abaixo cobre todos os passos da criação e desenvolvimento de novas páginas.

### 1. Crie um no arquivo em `src/pages` com a extensão `.html`, siga o estilo de caixa baixa, e uma estrutura de pastas coerente ao caminho da página como no exemplo na seçãp "Páginas" deste arquivo.

### 2. Adicione a estrutura base, que estende o layout desejado, na mairoria dos casos é o `src/layouts/default.hbs`:
```handlebars
{{#extend "default"}}
    {{#content "main"}}
        <!-- Seu conteúdo da página vai aqui! -->
    {{/content}}
{{/extend}}
```

### 3. Customize o conte;udo adicionando seue próprios elementos em HTML.

### 4. Caso suas página tenha partes que podem se repetir em outras páginas, é aconcelhavel que seja criado um parcial (partial), para compartilhar a lógico com outras páginas do site.

### 5. Salve seus arquivos e commit suas alterações em uma nova Branch, para isso:
1. Faça um Pull da Branch `development` para ter certeza que tem todas as últimas mudanças feitas pelo time.
2. Crie uma nova Branch a partir da Branch `development`.
3. Commit suas mudanças nessa nova Branch.
4. Faça o **Push**  de sua Branch para o Github

### 6. Crie um **Pull Request** da sua Branch para a `development`
### 7. Avançe seu ticket no [projeto do Github](https://github.com/orgs/ICEI-PUC-Minas-PMV-SI/projects/15) para a coluna **Review**
### 8. Notifique a equipe no chat do Teams
### 9. Aguarde seu review, e atenda a qualquer mudança requerida pela equipe
### 10. Uma vez aprovado, faça o **merge** de suas alterações.

Repita este ciclo para todas as alterações que fizer no repositório, sem pular passos para mantermos a organização e transparência do progresso do projeto.


