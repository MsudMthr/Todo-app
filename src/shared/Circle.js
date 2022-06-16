import React from 'react';

const Circle = () => {
    return (
        <div className='h-40 w-48 absolute top-0 left-0'>
            <div className='w-[200px] h-[200px] bg-[#8ACE95]/50 rounded-full absolute -top-1/2' ></div>
            <div className='w-[200px] h-[200px] bg-[#8ACE95]/50 rounded-full absolute -left-1/2' ></div>
        </div>
    );
};

export default Circle;