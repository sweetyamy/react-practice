import React, { useState } from 'react';

// const obj = {
//   name: 'Amy',
//   title: 'Front-end developer | UI/UX designer',
//   mentor: {
//     name: 'Tim',
//     title: 'Staff engineer'
//   }
// };

// const name = 'updated name';
// const update = {
//   ...obj,
//   mentor: { ...obj.mentor, name: name }
// };

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: 'Amy',
    title: 'Front-end developer | UI/UX designer',
    mentor: {
      name: 'Tim',
      title: 'Staff engineer'
    }
  });
  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>
        The mentor of {person.name} is {person.mentor.name} (
        {person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name }
          }));
        }}
      >
        Change your mentor's name
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title }
          }));
        }}
      >
        Change your mentor's title
      </button>
    </div>
  );
}
