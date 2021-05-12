### Conteúdo teórico: por que testar?

é impensável desenvolver profissionalmente sem incluir testes

- Confiança ao refatorar
- Confiança ao incluir novas funcionalidades
- Confiança ao atualizar depêndencias
- Facilita a compreensão da implementação
- Funciona como documentação

### Conteúdo teórico: o que testar?

- Tudo o quefizer sentido testar!
- Devo deixar um comentario? escreva um teste

### Conteúdo teórico: tipos de testes


Pirâmide de testes

- Unit Tests (Métodos por Métodos)
- Integration Tests
- End to End (E2E) Tests

### Conteúdo teórico: Ferramentas

- Jest
    - É um test runner
    - Localiza os arquivos e exucuta os testes
    - Permite fazer mock e obeservar métodos em bibliotecas
    - Permite fazer assertions como expect

- Testing Library
    - É uma biblioteca que provê utilitários para montar componentes
    - Oferece ferramentas de interagir com o componentes como se fosse o usuário
    - Trabalha em conjunto com o jest
    - Faz o mermo papel do enzyme e vue-test-utils
    - pode ser usada para substituíl-as
- Enzyme
    - É uma biblioteca que provê utilitários para montar componentes
    - permite manejar state e testar detalhes de implementação
- Vue test Utils
    - É uma biblioteca que provê utilitários para montar componentes vue
    - outros
- Cypress
    - É um framework de testes End to End
    - Executa a aplicação no browser, como se fosse o usuário
    - permite executar no Chrome, fireFox, edge e electron
    - Uma ferramenta completa, não precisa ser usado com o jest

###  Conteúdo teórico: integraçao com CI/CD

O papel dos testes no deploy moderno

Os testes são integrados ao processo de continuos integration / Continuous Delivery e são fundamentais para que estes exista,.

- Github Actions
- Circle Ci

###  Conteúdo teórico: TDD

TDD

- Write a failing test
- Refactor
- Make the test pass

Vantagens

- Melhora a implementação
- Facilita implementações mais simples
- Facilita a escrita dos testes
- Detalhes implementação frescos na mente
- Menor tempo dedicado a bug fixing

Desafios
- Curva de aprendizado
- Maior tempo de desenvolvimento
- Dfícil de vender ao time de produto