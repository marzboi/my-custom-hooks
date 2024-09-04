import { todoReducer } from "./reducer/todoReducer";
import { useEffect, useReducer } from "react";

// const initialState = JSON.parse(localStorage.getItem("todos"));

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const todosCount = todos.length;

  const todosPending = todos.filter((todo) => todo.done !== true).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (todoId) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggleTodo = (todoId) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: todoId,
    };

    dispatch(action);
  };

  return {
    todos,
    todosCount,
    todosPending,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
