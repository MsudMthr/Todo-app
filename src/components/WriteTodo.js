import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { addTodo } from "../redux/todo/todoAction";
import { db } from "../firebase";
import { set , ref } from "firebase/database";

const WriteTodo = ({ isShowTodoForm }) => {
  const uid = useSelector((state) => state.userState.user.uid);
  const todos = useSelector((state) => state.todoState.todos);
  console.log(uid);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const writeTodoDatabase = (todos) => {
   set((ref(db , "/" + uid)) , {
    todos , 
    uid
   })
  };

  const todoHandler = (e) => {
    setTodo(e.target.value);
  };

  const clickHandler = async () => {
    if (todo.length) {
      await dispatch(addTodo(todo));
      writeTodoDatabase(todos);
      setTodo("");
    }
  };

  const keyHandler = async (e) => {
    if (e.key === "Enter") {
      if (todo.length) {
        await dispatch(addTodo(todo));
        writeTodoDatabase();
        setTodo("");
      }
    }
  };
  return (
    <div
      className={`my-2 flex items-center gap-2 transition ${
        isShowTodoForm ? "scale-100" : "scale-0 "
      }`}
    >
      <input
        type="text"
        value={todo}
        onChange={todoHandler}
        className="mx-2 w-11/12 rounded-md bg-[#E5E5E5] p-1 capitalize outline-none"
        onKeyPress={keyHandler}
      />
      <button onClick={clickHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default WriteTodo;
