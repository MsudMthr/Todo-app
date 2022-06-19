import React from 'react';

const Todo = ({text , done}) => {
    return (
        <div className='flex items-center'>
            <span className={`w-4 h-4 border rounded-full border-black inline-block ${done&& "bg-[#38C24E]"}`}></span>
            <p className='text-sm sm:text-lg ml-4'>todo</p>
        </div>
    );
};

export default Todo;