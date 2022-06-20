import React from "react";
import Todo from "../shared/Todo";

const BoxTodos = ({todos}) => {
  // const todos = JSON.parse(localStorage.getItem("todos"));
  // console.log(todos);
  return (
    <>
      {todos.length ? (
        <div className="w-full overflow-auto">
          {todos.map((todo, index) => (
            <Todo todo={todo} key={index} />
          ))}
        </div>
      ) : (
        <div>empty</div>
      )}
    </>
  );
};

export default BoxTodos;
