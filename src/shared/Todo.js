import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { deleteTodo, doneTodo } from "../redux/todo/todoAction";
const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(todo));
  };

  const doneTodoHandler = () => {
    dispatch(doneTodo(todo));
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center justify-start">
        <button
          onClick={doneTodoHandler}
          className={`inline-block h-4 w-4 select-none rounded-full border border-black transition  ${
            todo.done && "bg-[#38C24E]"
          }`}
        ></button>
        <p className="ml-4 text-sm capitalize sm:text-lg">{todo.text}</p>
      </div>
      <button className="justify-self-end" onClick={deleteTodoHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-red-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Todo;
