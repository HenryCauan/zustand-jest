Boa! 🚀
Criar exercícios práticos é a melhor forma de fixar Jest (testes) e Zustand (gerenciamento de estado). Vou te passar uma lista de **tarefas progressivas** que simulam situações reais de projeto.

---

# 📌 Exercícios para **Zustand**

### Nível 1 – Básico

1. **Contador global**

   * Crie uma store com `count` e as funções `increment` e `decrement`.
   * Use o estado em dois componentes diferentes e valide que ambos atualizam juntos.

2. **Tema do site**

   * Guarde em uma store a preferência de tema (`light` ou `dark`).
   * Crie um botão que altera o tema e mostre em outro componente qual está ativo.

---

### Nível 2 – Intermediário

3. **Lista de tarefas**

   * Crie uma store com um array `todos` contendo `{ id, text, completed }`.
   * Adicione funções `addTodo`, `toggleTodo`, `removeTodo`.
   * Mostre a lista em um componente e crie outro só com o contador de tarefas concluídas (ambos usando a mesma store).

4. **Usuário autenticado**

   * Store com `user: null`.
   * Funções `login(user)` e `logout()`.
   * Mostre nome do usuário logado em vários lugares diferentes da aplicação.

---

### Nível 3 – Avançado

5. **Carrinho de compras**

   * Store com `items: []` contendo `{ id, name, price, quantity }`.
   * Funções `addItem`, `removeItem`, `clearCart`, `getTotalPrice`.
   * Mostre o carrinho em um componente e o total em outro.

---

# 📌 Exercícios para **Jest + Zustand**

### Nível 1 – Básico

1. **Testar funções puras**

   * Teste uma função simples como `sum(a, b)` ou `isEven(n)`.
   * Use `expect(...).toBe(...)`.

2. **Testar a store (unit test)**

   * Crie uma store simples (ex: contador).
   * No teste, importe a store e valide:

     ```js
     const { getState } = useStore; 
     expect(getState().count).toBe(0);
     getState().increment();
     expect(getState().count).toBe(1);
     ```

---

### Nível 2 – Intermediário

3. **Mock com Jest**

   * Crie uma função que busca dados de uma API (ex: `fetchUsers`).
   * Teste usando `jest.fn()` ou `jest.mock()` para simular a resposta da API.

4. **Testar a store com dados**

   * Crie a store de **todos**.
   * Escreva testes unitários para: adicionar, remover e marcar como concluída.

---

### Nível 3 – Avançado

5. **Testar componentes com Zustand + RTL**

   * Exemplo: botão de incremento que usa a store.
   * Renderize o componente com **React Testing Library**.
   * Use `fireEvent.click(button)` e verifique se o valor da store mudou.

6. **Integração com API mockada**

   * Componente que ao montar chama uma API e salva no Zustand (`setUsers`).
   * Teste com `jest.mock()` a chamada da API.
   * Valide se o Zustand realmente recebeu os dados.

---

⚡ Dica para fixação:
Monte um mini-projeto tipo **Todo App** ou **Carrinho** e escreva testes para cada ação da store + interação do usuário. Isso já te coloca muito perto de cenários reais em projetos React.

---

Quer que eu monte um **roteiro de 7 dias** com desafios progressivos (do básico ao avançado) em Jest + Zustand pra você praticar diariamente?
