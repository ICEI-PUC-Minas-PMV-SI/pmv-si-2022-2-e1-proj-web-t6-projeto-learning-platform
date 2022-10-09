# Especificações do Projeto

## Personas

Marcelo, 25 anos, casado e recém-formado em Sistemas de Informação, todos os
dias aplica em vagas para cargos na área de TI, mas sempre acaba esbarrando em
algum requisito em que ele ainda não tem competência técnica. Por isso, Marcelo
dedica tempo semanalmente para assistir vídeos e aprender técnicas e tecnologias
novas, mas encontra dificuldade em encontrar conteúdo gratuito de qualidade nos
tópicos que precisa aprender e que agreguem ao seu conhecimento sem desperdiçar
tempo.

Lívia, 17 anos, mora com seus pais e acabou de completar o ensino médio e tem
interesse na área de TI, mas uma faculdade está fora de alcance no momento
devido aos altos valores das mensalidades. Por isso, Livia procura sem sucesso,
plataformas que provenham direcionamento no conteúdo a ser estudo, para se
profissionalizar e adquirir o conhecimento necessário a fim de ingressar em seu
primeiro emprego no setor de tecnologia.

## Histórias de Usuários

1. Eu Marcelo, preciso encontrar conteúdo sobre tópicos e tecnologias
   específicas, para complementar meu conhecimento e aumentar minha
   competitividade no mercado.

2. Eu Lívia, preciso de conteúdo estruturado sobre tópicos e tecnologias na área
   de TI, para orientar meu caminho de aprendizagem e usufruir da melhor forma o
   conteúdo disponível.

3. Eu Lívia, quero poder compartilhar meu histórico de aprendizagem, para dar
   visibilidade sobre meus conhecimentos e aumentar minhas chances de ingressar
   no mercado de trabalho.


## Requisitos

### Requisitos Funcionais

| ID     | Página                             | Descrição do Requisito                                                                                                                                            | Prioridade |
| ------ | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RF-001 | Sobre                              | deverá conter conteúdo sobre a motivação e os integrantes do projeto                                                                                              | ALTA       |
| RF-002 | Como funciona                      | deverá conter informação sobre como funciona a aplicação e como o usuário pode começar                                                                            | ALTA       |
| RF-003 | Home                               | deverá conter cabeçalho com acesso para páginas Sobre, Login & Cadastro                                                                                           | ALTA       |
| RF-004 | Home                               | o cabeçalho da página inicial, deverá conter um campo para pesquisa de conteúdo                                                                                   | ALTA       |
| RF-005 | Home                               | uma vez logado, o cabeçalho deverá exibir acesso para o perfil de usuário                                                                                         | ALTA       |
| RF-006 | Home                               | o cabeçalho da página inicial, deverá conter um campo de pesquisa                                                                                                 | ALTA       |
| RF-007 | Home                               | a página inicial, deverá conter um filtro por palavras chave (tecnologias & tópicos)                                                                              | ALTA       |
| RF-008 | Pesquisa                           | a plataforma deverá retornar resultados de pesquisa condizentes a requisição feita pelo usuário                                                                   | ALTA       |
| RF-009 | Login                              | deverá exibir o formulário de login com usuário, senha, botão de login e link para recuperação de senha                                                           | ALTA       |
| RF-010 | Login                              | uma vez submetido deverá redirecionar para a página inicial                                                                                                       | ALTA       |
| RF-011 | Login                              | caso o login falhe, reexibir formulário de login como mensagem de erro amigável e como prosseguir                                                                 | ALTA       |
| RF-012 | Login                              | ao clicar no link de recuperação de senha deverá levar o usuário para o formulário de recuperação de senha                                                        | ALTA       |
| RF-013 | Cadastro                           | deverá formulário para criação de usuário como nome completo, usuário, senha, botão para submeter e link para a página de login (caso usuário já tenha uma conta) | ALTA       |
| RF-014 | Cadastro                           | uma vez submetido, deve criar a conta do usuário e enviar email de validação de email                                                                             | ALTA       |
| RF-015 | Cadastro                           | caso a criação de conta falhe, reexibir o formulário com informações amigáveis sobre o erro, e como prosseguir                                                    | ALTA       |
| RF-016 | Recuperação de senha               | deverá exibir formulário de recuperação de senha                                                                                                                  | ALTA       |
| RF-017 | Recuperação de senha               | uma vez submetido, exibir mensagem de sucesso e como prosseguir                                                                                                   | ALTA       |
| RF-020 | Recuperação de senha               | uma vez submetido, deverá exibir link para página inicial e login                                                                                                 | ALTA       |
| RF-021 | Dashboard                          | deverá conter o avatar, junto com informações do perfil do usuário                                                                                                | ALTA       |
| RF-022 | Dashboard                          | Deverá conter lista com os planos de estudo em andamento                                                                                                          | ALTA       |
| RF-023 | Dashboard                          | Deverá conter lista histórico de planos de estudo concluídos                                                                                                      | ALTA       |
| RF-024 | Dashboard                          | Deverá conter lista com conteúdo salvo pelo usuário                                                                                                               | ALTA       |
| RF-025 | Dashboard                          | Deverá conter lista com notas criadas pelo usuário, e permitir editar, e remover notas                                                                            | ALTA       |
| RF-026 | Dashboard                          | deverá exibir botão ou link de compartilhamento com redes sociais.                                                                                                | ALTA       |
| RF-027 | Perfil público                     | deverá exibir um avatar do usuário                                                                                                                                | ALTA       |
| RF-028 | Perfil público                     | deverá conter seção com gráficos sobre tópicos e tecnologias relacionadas ao histórico do usuário                                                                 | ALTA       |
| RF-029 | Perfil público                     | deverá deverá conter seção para lista de skills                                                                                                                   | ALTA       |
| RF-030 | Perfil público                     | deverá conter conter seção com histórico de planos de estudo concluídos                                                                                           | ALTA       |
| RF-031 | Perfil público                     | deverá conter seção com projetos concluídos pelo usuário                                                                                                          | ALTA       |
| RF-032 | Perfil público                     | deverá exibir link de acesso ao editor de perfil                                                                                                                  | ALTA       |
| RF-033 | Editor de perfil                   | deverá exibir formulário para atualização de perfil, permitindo alterar nome, avatar e senha                                                                      | ALTA       |
| RF-034 | Criador de plano de estudo         | deverá permitir ao usuário criar um plano de estudos com base em área, tecnologia e tempo disponível                                                              | ALTA       |
| RF-035 | Criador de plano de estudo         | deverá exibir uma páginas do plano de estudo criado.                                                                                                              | ALTA       |
| RF-036 | Criador de plano de estudo         | caso não haja progresso, exibir mensagem amigável incentivando usuário a começar.                                                                                 | ALTA       |
| RF-037 | Geral                              | A plataforma deverá referenciar os autores de conteúdos terceirizados respeitando a Lei de Direito Autoral (Lei nº. 9.610/98)                                     | ALTA       |


### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                                                                                            | Prioridade |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | A plataforma deverá ser acessível em formato para desktop & mobile (responsivo)                                                                                   | ALTA       |
| RNF-002 | A plataforma deverá ser compatível com Google Chrome, Edge & Opera                                                                                                | ALTA       |
| RNF-003 | A plataforma deverá carregar páginas em no máximo 2 segundos                                                                                                      | MÉDIA      |
| RNF-004 | Páginas protegidas do perfil do usuário (Perfil, Editor de perfil & Criação de plano) deverão ser protegidas e exigir login para acesso                           | ALTA       |
| RNF-005 | Senhas enviadas pela internet para o servidor deverão ser propriamente criptografadas para maior segurança                                                        | ALTA       |
| RNF-006 | O site deverá conter uma base de dados para armazenamento e manutenção de dados                                                                                   | ALTA       |
| RNF-007 | A base de dados deverá ser protegida para não permitir acesso indesejado dos dados                                                                                | ALTA       |
| RNF-008 | O site deverá conter UNIT testes automatizados com cobertura de no mínimo 50%                                                                                     | MÉDIA      |
| RNF-009 | O site deverá conter testes de interface abrangendo no mínimo as funcionalidades de: Login, Cadastro & Busca, expandindo para outras áreas se possível. (Cypress) | MÉDIA      |


## Restrições

| ID | Restrição                                                                                                                       |
| -- | ------------------------------------------------------------------------------------------------------------------------------- |
| 01 | O desenvolvimento da plataforma não poderá envolver membros que não compõem a equipe.                                           |
| 02 | O desenvolvimento da plataforma não poderá ultrapassar o período letivo do semestre.                                            |
| 03 | A plataforma não poderá conter módulo backend.                                                                                  |
| 04 | A plataforma não poderá conflitar com as legislações brasileiras.                                                               |
| 05 | A plataforma deverá se limitar ao ambiente Web.                                                                                 |
| 06 | O desenvolvimento da plataforma deverá ser desenvolvido exclusivamente com as linguagens de programação JavaScript, HTML e CSS. |
| 07 | A plataforma deverá armazenas dados localmente.                                                                                 |
