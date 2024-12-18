import React from 'react';

export default function Profile() {
  return (
    <div className='profile'>
      <img
        className='photo'
        src='https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='avatar'
      />
      <h1>Amy Ahn</h1>
      <p>UI/UX designer | Frontend developer</p>
    </div>
  );
}
