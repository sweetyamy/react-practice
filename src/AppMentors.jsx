import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: 'Amy',
    title: 'Front-end developer | UI/UX designer',
    mentors: [
      {
        name: 'Tim',
        title: 'Staff engineer'
      },
      {
        name: 'Ster',
        title: 'Senior engineer'
      }
    ]
  });
  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>The mentors of {person.name} are:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt('Whose name would you like to change?');
          const current = prompt('What would you like to change the name to?');

          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            })
          }));
        }}
      >
        Change your mentor's name
      </button>
    </div>
  );
}
