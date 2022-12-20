# Grimore

A versão live do projeto pode ser encontrada aqui [https://grimore-dev.onrender.com/sign-in](https://grimore-dev.onrender.com/sign-in).

Para rodar a versão local, siga as instruções abaixo.

## Desenvolvimento

A plataforma foi desenvolvida com Node Js e utiliza o **[Hotbars](https://github.com/jairmilanes/hotbars)** , uma plataforma de desenvolvimento que disponibiliza diversas técnologias para auxiliar no desenvolvimento de aplicativos e websites, algumas delas listadas abaixo:

* Handlebars
* Sass
* Json Server
* Http Server
* SMTP Server trap
* Data Management

Para iniciar o servidor de desenvolvimento, siga os passos abaixo.

### Instale os pacótes
Rode o comando abaixo a partir do root do projeto:
```
npm install
```

### Authenticação

A plataforma utiliza duas estratégias de authenticação, local e a integração com Github, nada precisa ser feito para efetuar seu cadastro e posteriormente seu login com a estratégia local, preechendo os formulários em `/sign-up` & `/sign-in`.

Para a integração com o Github, é necessário uma chave e um segredo que deve ser configurado no arquivo `.env` no root do projeto, esta mesma funcionalidade pode ser testada na versão live do projeto sem necessidade de configuração.

### Environment

Renomeie o arquivo `.env.template` no root do projeto para `.env` e substitua os valores das chaves abaixo para habilitar a authenticação com o Github:

```shell
GITHUB_CLIENT_ID=<github client id>
GITHUB_CLIENT_SECRET=<github client secret>
```

### Inicie o servidor

Isto irá instalar os arquivos necessários, a seguir, rode o comando abaixo para inicializar a plataforma:
```
npm start
```
Pronto! A plataforma está live na url [http://localhost:3000](http://localhost:3000), uma janela do navegador deverá abrir automaticamente, caso não aconteça, clica no link.


# Flow de desenfolvimento

Com os conceitos acima entendidos, é fácil criar novas páginas em nossa plataforma, o passo a passo abaixo cobre todos os passos da criação e desenvolvimento de novas páginas.

1. Crie um no arquivo em `src/pages` com a extensão `.html`, siga o estilo de caixa baixa, e uma estrutura de pastas coerente ao caminho da página como no exemplo na seçãp "Páginas" deste arquivo.

2. Adicione a estrutura base, que estende o layout desejado, na mairoria dos casos é o `src/layouts/default.hbs`:

    ```handlebars
    {{#extend "default"}}
        {{#content "main"}}
            <!-- Seu conteúdo da página vai aqui! -->
        {{/content}}
    {{/extend}}
    ```

3. Customize o conte;udo adicionando seue próprios elementos em HTML.

4. Caso suas página tenha partes que podem se repetir em outras páginas, é aconcelhavel que seja criado um parcial (partial), para compartilhar a lógico com outras páginas do site.

5. Salve seus arquivos e commit suas alterações em uma nova Branch, para isso:
    1. Faça um Pull da Branch `development` para ter certeza que tem todas as últimas mudanças feitas pelo time.
    2. Crie uma nova Branch a partir da Branch `development`.
    3. Commit suas mudanças nessa nova Branch.
    4. Faça o **Push** de sua Branch para o Github
6. Crie um **Pull Request** da sua Branch para a `development`

7. Avançe seu ticket no [projeto do Github](https://github.com/orgs/ICEI-PUC-Minas-PMV-SI/projects/15) para a coluna **Review**

8. Notifique a equipe no chat do Teams

9. Aguarde seu review, e atenda a qualquer mudança requerida pela equipe

10. Uma vez aprovado, faça o **merge** de suas alterações.

Repita este ciclo para todas as alterações que fizer no repositório, sem pular passos para mantermos a organização e transparência do progresso do projeto.

## Deployment para produção

A plataforma é estática e pode ser instalada em qualquer servidor web, basta exportar o conteúdo da past `./dist` para o servidor, mas por padrão, a o deployment é feita no Github pages automaticamente por meio de uma action configurada no Github, que acontece toda vez que uma tag é criada na branch **main**.
