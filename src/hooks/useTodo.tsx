import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface TodoContextProps {
  todos: any[];
  adicionarTodo: () => Promise<void>;
  deletarTodo: (id: string) => Promise<void>;
}

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext({} as TodoContextProps);

export default function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState([]);

  // TODO: Precisa realizar a requisição e armazenar os dados do todo
  async function listarTodo() {}

  useEffect(() => {
    listarTodo();
  }, []);

  // TODO: Precisa realizar a requisição e adiiconar o todo na listagem
  async function adicionarTodo() {}

  // TODO: Precisa realizar a requisição, deletar o todo e atualizar a listagem
  async function deletarTodo(id: string) {}

  return <TodoContext.Provider value={{
    todos,
    adicionarTodo,
    deletarTodo,
  }}>{children}</TodoContext.Provider>;
}

export function useTodo() {
    return useContext(TodoContext)
}