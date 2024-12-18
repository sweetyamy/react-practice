import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
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
      <p className='number'>
        {count} <span className='total'>/{total}</span>
      </p>
      <button
        className='button'
        onClick={() => {
          // Each setCount call updates the state based on the previous value of 'count'.
          // React batches state updates inside event handlers, so these updates will
          // be applied sequentially, not immediately. The final value will be 'count + 5'.
          setCount((prev) => prev + 1); // Increment by 1
          onClick();
          console.log(count);
        }}
      >
        Add +
      </button>
    </div>
  );
}
