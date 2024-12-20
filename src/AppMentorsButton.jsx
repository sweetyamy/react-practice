import React, { useCallback, useMemo, useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  // Initialize state with the initial person object
  //   const [person, setPerson] = useState(inintialPerson);
  const [person, dispatch] = useReducer(personReducer, inintialPerson);

  // Update the name of a mentor
  const handleUpdate = useCallback(() => {
    const prev = prompt('Whose name would you like to change?');
    const current = prompt('What would you like to change the name to?');

    dispatch({ type: 'updated', prev, current });
  }, []);

  // Add a new mentor to the list
  const handleAdd = useCallback(() => {
    const name = prompt('Please enter the name of the mentor you want to add.');
    const title = prompt(
      'Please enter the title of the mentor you want to add.'
    );

    dispatch({ type: 'added', name, title });
  }, []);

  // Delete a mentor from the list
  const handleDelete = useCallback(() => {
    const name = prompt('Whose name would you like to delete?');

    dispatch({ type: 'deleted', name });
  }, []);

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
      <Button text="Change your mentor's name" onClick={handleUpdate} />
      <Button text='Add Mentor' onClick={handleAdd} />
      <Button text='Delete Mentor' onClick={handleDelete} />
    </div>
  );
}

// eslint-disable-next-line no-undef
const Button = memo(({ text, onClick }) => {
  console.log('Button:', text, 're-rendering');
  const result = useMemo(() => calcuateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        padding: '0.4rem 1.2rem', // padding-top/bottom: 0.4rem, padding-left/right: 1rem
        margin: '0.4rem',
        cursor: 'pointer'
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calcuateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log(':)');
  }
  return 10;
}

// Initial person object with mentors
const inintialPerson = {
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
};
