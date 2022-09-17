# Especificações do Projeto

## Personas

Marcelo, 25 anos, casado e recém-formado em Sistemas de Informação, todos os dias aplica em vagas para cargos na área de TI, mas sempre acaba esbarrando em algum requisito em que ele ainda não tem competência técnica. Por isso, Marcelo dedica tempo semanalmente para assistir vídeos e aprender técnicas e tecnologias novas, mas encontra dificuldade em encontrar conteúdo gratuito de qualidade nos tópicos que precisa aprender e que agreguem ao seu conhecimento sem desperdiçar tempo. 

Lívia, 17 anos, mora com seus pais e acabou de completar o ensino médio e tem interesse na área de TI, mas uma faculdade está fora de alcance no momento devido aos altos valores das mensalidades. Por isso, Livia procura sem sucesso, plataformas que provenham direcionamento no conteúdo a ser estudo, para se profissionalizar e adquirir o conhecimento necessário a fim de ingressar em seu primeiro emprego no setor de tecnologia. 

## Histórias de Usuários

1. Eu Marcelo, preciso encontrar conteúdo sobre tópicos e tecnologias específicas, para complementar meu conhecimento e aumentar minha competitividade no mercado. 

2. Eu Lívia, preciso de conteúdo estruturado sobre tópicos e tecnologias na área de TI, para orientar meu caminho de aprendizagem e usufruir da melhor forma o conteúdo disponível. 

3. Eu Lívia, quero poder compartilhar meu histórico de aprendizagem, para dar visibilidade sobre meus conhecimentos e aumentar minhas chances de ingressar no mercado de trabalho. 


## Requisitos

### Requisitos Funcionais

| ID     | Página                             | Descrição do Requisito                                                                                                                                            | Prioridade | 
|--------|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----| 
| RF-001 | Informação                         | deverá conter conteúdo sobre a motivação e os integrantes do projeto                                                                                              | ALTA |
| RF-002 | Informação                         | deverá conter informação sobre como funciona a aplicação e como o usuário pode começar                                                                            | ALTA |
| RF-003 | Home                               | deverá conter cabeçalho com acesso para páginas Sobre, Login & Cadastro                                                                                           | ALTA |
| RF-004 | Home                               | o cabeçalho da página inicial, deverá conter um campo para pesquisa de conteúdo                                                                                   | ALTA |
| RF-005 | Home                               | uma vez logado, o cabeçalho deverá exibir acesso para o perfil de usuário                                                                                         | ALTA |
| RF-006 | Home                               | o cabeçalho da página inicial, deverá conter um campo de pesquisa                                                                                                 | ALTA |
| RF-007 | Home                               | a página inicial, deverá conter um filtro por palavras chave (tecnologias & tópicos)                                                                              | ALTA |
| RF-008 | Home                               | A plataforma deverá retornar resultados de pesquisa condizentes a requisição feita pelo usuário Login Média                                                       | ALTA |
| RF-009 | Home                               | deverá exibir o formulário de login com usuário, senha, botão de login e link para recuperação de senha                                                           | ALTA |
| RF-010 | Home                               | uma vez submetido deverá redirecionar para a página inicial                                                                                                       | ALTA |
| RF-011 | Home                               | caso o login falhe, reexibir formulário de login como mensagem de erro amigável e como prosseguir                                                                 | ALTA |
| RF-012 | Home                               | ao clicar no link de recuperação de senha deverá levar o usuário para o formulário de recuperação de senha                                                        | ALTA |
| RF-013 | Home                               | deverá exibir formulário de recuperação de senha                                                                                                                  | ALTA |
| RF-014 | Cadastro                           | deverá formulário para criação de usuário como nome completo, usuário, senha, botão para submeter e link para a página de login (caso usuário já tenha uma conta) | ALTA |
| RF-015 | Cadastro                           | uma vez submetido, deve criar a conta do usuário e redirecionar para o perfil de usuário                                                                          | ALTA |
| RF-016 | Cadastro                           | caso a criação de conta falhe, reexibir o formulário com informações amigáveis sobre o erro, e como prosseguir                                                    | ALTA |
| RF-017 | Recuperação de senha               | deverá exibir formulário de recuperação de senha                                                                                                                  | ALTA |
| RF-018 | Recuperação de senha               | uma vez submetido, exibir mensagem de sucesso e como prosseguir                                                                                                   | MÉDIA |
| RF-019 | Recuperação de senha               | uma vez submetido, deverá exibir link para página inicial e login                                                                                                 | MÉDIA |
| RF-020 | Perfil de usuário                  | deverá conter um avatar automático do usuário                                                                                                                     | MÉDIA |
| RF-021 | Perfil de usuário                  | deverá exibir por padrão sessão com as palavras chave de tópicos de vídeos mais assistidos pelo usuário                                                           | MÉDIA |
| RF-022 | Perfil de usuário                  | deverá exibir sessão com os últimos vídeos assistidos pelo usuário                                                                                                | MÉDIA |
| RF-023 | Perfil de usuário                  | deverá conter sessão com sugestões de vídeos para o usuário                                                                                                       | MÉDIA |
| RF-024 | Perfil de usuário                  | deverá exibir link de acesso ao editor de perfil                                                                                                                  | MÉDIA |
| RF-025 | Editor de perfil                   | deverá exibir formulário para atualização de perfil, permitindo alterar nome & senha                                                                              | MÉDIA |
| RF-026 | Criador de plano de estudo         | deverá permitir ao usuário escolher um roadmap completo                                                                                                           | MÉDIA |
| RF-027 | Criador de plano de estudo         | deverá permitir ao usuário criar seu próprio roadmap                                                                                                              | MÉDIA |
| RF-028 | Criador de plano de estudo         | deverá conter um seletor de roadmap e ou palavras chave (tags)                                                                                                    | MÉDIA |
| RF-029 | Criador de plano de estudo         | cada tag escolhida, deverá ser exibida em um tipo de lista intuitiva, denominando um progresso a ser feito.                                                       | MÉDIA |
| RF-030 | Criador de plano de estudo         | caso usuário crie seu próprio roadmap, deverá permitir reordenar as palavras chave da lista.                                                                      | MÉDIA |
| RF-031 | Criador de plano de estudo         | deverá permitir salvar o roadmap.                                                                                                                                 | MÉDIA |
| RF-032 | Criador de plano de estudo         | deverá exibir uma visualização do roadmap (plano de estudo) criado.                                                                                               | MÉDIA |
| RF-033 | Criador de plano de estudo         | caso não haja progresso, exibir mensagem amigável incentivando usuário a começar.                                                                                 | MÉDIA |
| RF-034 | Progresso do usuário - (Histórico) | deverá exibir de maneira intuitiva o progresso feito pelo usuário até o momento com nomes dos vídeos já assistidos agrupados por cada palavra chave.              | MÉDIA |
| RF-035 | Progresso do usuário - (Histórico) | caso usuário crie seu próprio roadmap, deverá permitir reordenar as palavras chave da lista.                                                                      | MÉDIA |
| RF-036 | Progresso do usuário - (Histórico) | deverá exibir botão ou link de compartilhamento com redes sociais.                                                                                                | MÉDIA |
| RF-037 | Progresso do usuário - (Histórico) | A plataforma deverá referenciar os autores de conteúdos terceirizados respeitando a Lei de Direito Autoral (Lei nº. 9.610/98)                                     | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A plataforma deverá ser acessível em formato para desktop & mobile (responsivo) | ALTA | 
|RNF-002| A plataforma deverá ser compatível com Google Chrome, Edge & Opera  |  ALTA | 
|RNF-003| A plataforma deverá carregar páginas em no máximo 2 segundos  |  MÉDIA | 
|RNF-004| Páginas protegidas do perfil do usuário (Perfil, Editor de perfil & Criação de plano) deverão ser protegidas e exigir login para acesso  |  ALTA | 
|RNF-005| Senhas enviadas pela internet para o servidor deverão ser propriamente criptografadas para maior segurança |  ALTA | 
|RNF-006| O site deverá conter uma base de dados para armazenamento e manutenção de dados |  ALTA | 
|RNF-007| A base de dados deverá ser protegida para não permitir acesso indesejado dos dados |  ALTA | 
|RNF-008| O site deverá conter UNIT testes automatizados com cobertura de no mínimo 50%  |  MÉDIA | 
|RNF-009| O site deverá conter testes de interface abrangendo no mínimo as funcionalidades de: Login, Cadastro & Busca, expandindo para outras áreas se possível. (Cypress) |  MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
