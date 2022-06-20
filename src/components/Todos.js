import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import Todo from "../shared/Todo";
import BoxTodos from "./BoxTodos";
import WriteTodo from "./WriteTodo";
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoState.todos);

  const [isShowTodoForm, setIsShowTodoForm] = useState(true);
  return (
    <div className="mx-10 flex aspect-auto flex-col lg:mx-auto lg:aspect-square	lg:w-[950px] ">
      <h4 className="text-xl font-semibold">Task Lists</h4>
      <div className="mt-6 flex h-64 flex-col rounded-[24px] bg-white pl-6 pr-4 shadow-2xl">
        <div className="mt-3 flex flex-col justify-between  ">
          <div className="flex justify-between">
            <p className="text-sm font-semibold">Daily Tasks</p>
            <button onClick={() => setIsShowTodoForm(!isShowTodoForm)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition ${
                  isShowTodoForm
                    ? "rotate-[225deg] stroke-red-500"
                    : "rotate-0 stroke-green-400 "
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <WriteTodo
            isShowTodoForm={isShowTodoForm}
            setIsShowTodoForm={setIsShowTodoForm}
          />
        </div>
        <BoxTodos todos={todos} />
      </div>
    </div>
  );
};

export default Todos;
