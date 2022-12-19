# Programação de Funcionalidades

Nesta página descrevemos as técnologias e estrutura de dados utilizada no desenvolvimento do Grimore.

## Técnologias

Para que pudessemos atingir nosso objetivo com essa plataforma, foi escolhido um grupo de técnologias que se complementam e dão flexibilidade para o time no desenvolvimento das funcionalidades propóstas nesse projeto.

* **Node JS**: Utilizado para rodar o servidor de desenvolvimento e gerênciamento de pacótes.
* **Json Server**: Utilizado como provedor de dados, servidos a partir de arquivos Json
* **Handlebars**: Um sistema de template simples que permite a criação de blocos lógicos e diminui a repetição de código.
* **Sass**: Pre-processador de css
* **Jquery**: Para lógica client side em javascript
* **Bootstrap 5**: Framework para desenvolvimento frontend
* **HTML 5**: Para marcação de páginas e layout de páginas.

## Estrutura de dados

Foram necessárias algumas estruturas de dados para a plataforma, abaixo descrevemos as mais importantes:

### Users

Estrutura base de perfíl de usuários na plataforma.

```json
{
    "id": "string",
    "createdAt": "Date",
    "gender": "string",
    "firstName": "string",
    "lastName": "string",
    "username": "string",
    "password": "string",
    "email": "string",
    "avatar": "url",
    "jobTitle": "string",
    "country": "string",
    "countryCode": "string",
    "age": "number",
    "state": "string",
    "bio": "string",
    "timeZone": "string",
    "website": "url"
}
```

### Technologies

Armazena todas as técnologias abordadas na plataforma, utilizadas como filtro nas telas e conteúdo.

```json
{
    "id": "string",
    "title": "string",
    "sub-title": "string",
    "slug": "string",
    "type": "string",
    "description": "string",
    "icon": "url",
    "website": "string",
    "areaId": "string"
}
```

### Tracks

Tracks são as possíveis linhas de estudo de um usuário.

```json
{
    "id": "string",
    "title": "string",
    "slug": "string",
    "icon": "url",
    "areaId": "string",
    "technologyId": "string"
}
```


### Topics

Cada track possuí seu conjundo de tópicos de estudo representados na estrutura abaixo.

```json
{
    "id": "string",
    "title": "string",
    "description": "string",
    "areaId": "string",
    "trackId": "string"
}
```

### Lessons

Cada tópico por sua vez, engloba uma ou mais lissões, com conteúdo diverso.

```json
{
    "id": "datatype.uuid",
    "endDate": "date",
    "title": "lorem.sentence",
    "content": "helpers.fake:## {{lorem.sentence}}|{{lorem.paragraph}}|{{lorem.paragraph}}|### {{lorem.sentence}}|![Image]({{image.abstract}})|{{lorem.paragraph}}|{{lorem.paragraph}}||### {{lorem.sentence}}|{{lorem.paragraph}}|{{lorem.paragraph}}|{{lorem.paragraph}}|![People]({{image.people}})||## {{lorem.sentence}}|{{lorem.paragraph}}|{{lorem.paragraph}}|{{lorem.paragraph}}|{{lorem.paragraph}}",
    "topicId": "one-to-one:topics.id"
}
```

## Screenshots

As screenshots abaixo demonstram algumas das páginas mais importantes da aplicação e seus arquivos fonte, desenvolvidas utilizando as técnologias descritas nesta página e utilizando a esturtura de dados propósta.

### Home Page

_/src/pages/index.hbs_
![Pesquisa de conteudo](img/etapa-3/home.png)
(RF-003 -> RF-007)

### Sobre o projeto

_/src/pages/about.hbs_
![Pesquisa de conteudo](img/etapa-3/sobre.png)
(RF-001)

### Como funciona

_/src/pages/how-it-works.hbs_
![Pesquisa de conteudo](img/etapa-3/como-funciona.png)
(RF-002)

### Buscar Conteúdo

_/src/pages/index.hbs_
![Pesquisa de conteudo](img/etapa-3/busca.png)

### Videos

_/src/pages/search/index.hbs_
![Pesquisa de conteudo](img/etapa-3/videos.png)
(RF-008)

### Videos por technologia

_/src/pages/search/index.hbs_
![Pesquisa de conteudo](img/etapa-3/tech-videos.png)

### Cadastro

_/src/pages/search/sign-up/index.hbs_
![Pesquisa de conteudo](img/etapa-3/cadastro.png)
(RF-013 até RF-015)

### Login

_/src/pages/search/sign-in.hbs_
![Pesquisa de conteudo](img/etapa-3/login.png)
(RF-009 até RF-012)

### Criar plano de estudos

_/src/pages/secure/new/track/index.hbs_
![Pesquisa de conteudo](img/etapa-3/novo-plano.png)
(RF-034 e RF-036)

### Escolha de technologia

_/src/pages/secure/new/track/tech.hbs_
![Pesquisa de conteudo](img/etapa-3/plano-tech.png)
( RF-035)

### Plano de estudos

_/src/pages/secure/tracks/[trackId]/index.hbs_
![Pesquisa de conteudo](img/etapa-3/plano-de-estudo.png)

### Tópico de estudo

_/src/pages/secure/tracks/[trackId]/[topicId].hbs_
![Pesquisa de conteudo](img/etapa-3/plano-de-estudo.png)
