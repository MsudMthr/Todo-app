import React from "react";
import addTodo from "../assets/SVG/plus-circle.svg";
import Todo from "../shared/Todo";
const Todos = () => {
  return (
    <div className="mx-10 flex aspect-auto flex-col lg:mx-auto lg:aspect-square	lg:w-[950px] ">
      <h4 className="text-xl font-semibold">Task Lists</h4>
      <div className="mt-6 flex h-64 flex-col rounded-[24px]bg-white pl-6 pr-4 shadow-2xl">
        <div className="mt-3 flex justify-between  ">
          <p className="text-sm font-semibold">Daily Tasks</p>
          <button>
            <img src={addTodo} alt="add todo" />
          </button>
        </div>
        <div>
          <Todo />
        </div>
      </div>
    </div>
  );
};

export default Todos;
