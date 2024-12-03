i está um exemplo de como você pode estruturar essa documentação:
markdown
Copiar código
# Testes Realizados

## Funcionalidade de Adicionar Cupcakes
- **Teste 1**: Adicionar cupcake de morango
  - **Resultado esperado**: O cupcake de morango é adicionado ao carrinho e o preço total é atualizado corretamente.
  - **Resultado obtido**: Funcionou conforme esperado.

- **Teste 2**: Alterar a quantidade de cupcakes de morango
  - **Resultado esperado**: O preço total é atualizado corretamente de acordo com a quantidade.
  - **Resultado obtido**: Funcionou conforme esperado.

- **Teste 3**: Remover cupcake do carrinho
  - **Resultado esperado**: O cupcake é removido do carrinho e o preço total é subtraído corretamente.
  - **Resultado obtido**: Funcionou conforme esperado.
  
## Testes de Responsividade
- **Teste 1**: A tela inicial no mobile
  - **Resultado esperado**: O layout deve se ajustar corretamente para telas pequenas.
  - **Resultado obtido**: Funcionou conforme esperado.

## Testes de Erro
- **Erro 1**: A quantidade de cupcakes não altera o preço total corretamente.
  - **Solução**: Corrigido ajustando a lógica de cálculo no JavaScript.

## Observações Finais
- Todos os testes foram realizados com sucesso, exceto pelos pequenos ajustes feitos no cálculo da quantidade.