
# Iniciando o projeto

1. Faça o clone do projeto e escolha o local que deseja clonar.


    ```bash
    git clone https://github.com/ottosdev/prova-curso-react.git
    ```

2. Abra seu projeto no VsCode e acesse o terminal. Digite o seguinte comando para instalar as dependências.

    ```bash
    npm install
    ```

3. Inicie o projeto com o comando:

    ```bash
    npm run dev
    ```

4. Inicie a API fake com o comando:

    ```bash
    npm run server
    ```

   URL: [http://localhost:4000/](http://localhost:4000/)

# O que precisa ser feito

1. Na pasta `pages`, acesse o arquivo `todo.tsx`, crie uma propriedade `nome` com o seu nome e passe para o componente `HEADER` e exiba essa propriedade na tela.

2. Na pasta `hooks`, `useTodo.jsx`, encontram-se as funções necessárias. Implemente as regras de negócio abaixo:

    2.1. Listar os TODOS.

    2.2. Adicionar os TODOS: Para criar um todo precisa de título e uma descrição. O `id` é gerado automaticamente (não precisa passar pela requisição).

    2.3. Remover os TODOS. 

**Componente `todo-list.tsx`:**

- Depois de implementar o método 2.1. Listar os TODOS, pegue o array com os `todos` e exiba na tela.
- Use o método 2.3. Remover os TODOS, passando o `id` na URL, e use-o para remover cada item da listagem.

**Componente `add-todo.tsx`:**

- Crie os estados para armazenar o título e a descrição.
- Use a função `handleAdicionarTodo`.
- Use `adicionarTodos` para salvar.
- Use o useNavigate() e adicione a logica para voltar para tela de listagem.

