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

|ID | Página | Descrição do Requisito | Prioridade | 
|------|--------|------------------------------------------|----| 
|RF-001| Informação | deverá conter conteúdo sobre a motivação e os integrantes do projeto | ALTA |
|RF-002| Informação | deverá conter informação sobre como funciona a aplicação e como o usuário pode começar | ALTA |
|RF-003| Home | deverá conter cabeçalho com acesso para páginas Sobre, Login & Cadastro | ALTA |
|RF-004| Home | o cabeçalho da página inicial, deverá conter um campo para pesquisa de conteúdo  | ALTA |
|RF-005| Home | uma vez logado, o cabeçalho deverá exibir acesso para o perfil de usuário  | ALTA |
|RF-006| Home | o cabeçalho da página inicial, deverá conter um campo de pesquisa  | ALTA |
|RF-007| Home | a página inicial, deverá conter um filtro por palavras chave (tecnologias & tópicos)  | ALTA |
|RF-008| Home | A plataforma deverá retornar resultados de pesquisa condizentes a requisição feita pelo usuário Login Média | ALTA |
|RF-009| Home | deverá exibir o formulário de login com usuário, senha, botão de login e link para recuperação de senha | ALTA |
|RF-010| Home | uma vez submetido deverá redirecionar para a página inicial  | ALTA |
|RF-011| Home | caso o login falhe, reexibir formulário de login como mensagem de erro amigável e como prosseguir | ALTA |
|RF-012| Home | ao clicar no link de recuperação de senha deverá levar o usuário para o formulário de recuperação de senha | ALTA |
|RF-013| Home | deverá exibir formulário de recuperação de senha | ALTA |
|RF-014| Cadastro | deverá formulário para criação de usuário como nome completo, usuário, senha, botão para submeter e link para a página de login (caso usuário já tenha uma conta) | ALTA |
|RF-015| Cadastro | uma vez submetido, deve criar a conta do usuário e redirecionar para o perfil de usuário | ALTA |
|RF-016| Cadastro | caso a criação de conta falhe, reexibir o formulário com informações amigáveis sobre o erro, e como prosseguir  | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

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
