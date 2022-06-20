const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (!state.todos.find((todo) => todo.text === action.payload.text)) {
        return {
          todos: [...state.todos, { text: action.payload, done: false }],
        };
      }

    case "DELETE_TODO":
      const newTodos = state.todos.filter(
        (todo) => action.payload.text !== todo.text
      );
      return {
        todos: [...newTodos],
      };

    case "DONE_TODO":
      const doneIndex = state.todos.findIndex(
        (todo) => todo.text === action.payload.text
      );
      if (state.todos[doneIndex].done) {
        state.todos[doneIndex].done = false;
      } else {
        state.todos[doneIndex].done = true;
      }

      return {
        todos: [...state.todos],
      };

    case "CLEAR_ALL_TODOS":
      return {
        todos: [],
      };
    default:
      return state;
  }
};

export default todoReducer;
