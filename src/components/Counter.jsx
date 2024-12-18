import React, { useState } from 'react';

export default function Counter() {
  //   let num = 0;
  const [count, setCount] = useState(0);

  return (
    //  UI wouldn't be changed
    // <div className='counter'>
    //   <span className='number'>{num}</span>
    //   <button
    //     className='button'
    //     onClick={() => {
    //       num++;
    //       console.log(num);
    //     }}
    //   >
    //     Add +
    //   </button>
    //   </div>

    //  useState
    <div className='counter'>
      <span className='number'>{count}</span>
      <button
        className='button'
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Add +
      </button>
    </div>
  );
}
