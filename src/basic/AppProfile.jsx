import React from 'react';
import Profile from './components/Profile';
import './App.css';
import Avartar from './components/Avartar';

export default function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('Button clicked');
  };
  return (
    <>
      <button onClick={handleClick}>Button</button>
      <Avartar
        image='https://media.istockphoto.com/id/1450969748/photo/developer-working-with-new-program.jpg?s=2048x2048&w=is&k=20&c=iFBySg9gYWU20rRPhwafcTBroJB_0qCBuotH2BcPQGs='
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        name='Amy'
        title='UI/UX designer | Frontend developer'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        name='Ster'
        title='Backend developer'
      />
      <Profile
        image='https://images.unsplash.com/photo-1514543250559-83867827ecce?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        name='Ibes'
        title='Full stack developer'
      />
    </>
  );
}
