import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/todo";
import TodoList from "../components/todo/todo-list";
import AddTodo from "../components/todo/add-todo";

export const routes = createBrowserRouter([{
    path: '/',
    element: <Todo/>,
    children: [
        {path: '/', element:  <TodoList/>},
        {path: '/add', element:  <AddTodo/>}
    ]
}]);
