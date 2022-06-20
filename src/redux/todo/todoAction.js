const addTodo = (todo) => {
  return { type: "ADD_TODO", payload: todo };
};
const doneTodo = (todo) => {
  return { type: "DONE_TODO", payload: todo };
};
const deleteTodo = (todo) => {
  return { type: "DELETE_TODO", payload: todo };
};
const clearAllTodos = () => {
  return { type: "CLEAR_ALL_TODOS" };
};

export { addTodo, clearAllTodos, deleteTodo, doneTodo };
