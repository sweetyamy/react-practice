import React, { useState } from 'react';

export default function AppMentor(props) {
  // Initialize state with the initial person object
  const [person, setPerson] = useState(inintialPerson);

  // Update the name of a mentor
  const handleUpdate = () => {
    const prev = prompt('Whose name would you like to change?');
    const current = prompt('What would you like to change the name to?');

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        // If the mentor name matches, update the name
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor; // Otherwise, return the mentor unchanged
      })
    }));
  };

  // Add a new mentor to the list
  const handleAdd = () => {
    const name = prompt('Please enter the name of the mentor you want to add.');
    const title = prompt(
      'Please enter the title of the mentor you want to add.'
    );

    setPerson((person) => ({
      ...person,
      mentors: [{ name, title }, ...person.mentors]
    }));
  };

  // Delete a mentor from the list
  const handleDelete = () => {
    const name = prompt('Whose name would you like to delete?');

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((m) => m.name !== name)
    }));
  };

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
      <button onClick={handleUpdate}>Change your mentor's name</button>
      <button onClick={handleAdd}>Add Mentor</button>
      <button onClick={handleDelete}>Delete Mentor</button>
    </div>
  );
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
