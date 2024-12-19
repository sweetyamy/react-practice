import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorsImmer(props) {
  // Initialize state with the initial person object
  const [person, updatePerson] = useImmer(inintialPerson);

  // Update the name of a mentor
  const handleUpdate = () => {
    const prev = prompt('Whose name would you like to change?');
    const current = prompt('What would you like to change the name to?');

    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  // Add a new mentor to the list
  const handleAdd = () => {
    const name = prompt('Please enter the name of the mentor you want to add.');
    const title = prompt(
      'Please enter the title of the mentor you want to add.'
    );

    //  updatePerson((person) => person.mentors.push({ name, title }));
    // QQQ - 왜 위의 코드는 에러가 나고, 아래것은 괜찮을까??????

    updatePerson((person) => {
      person.mentors.push({ name, title }); // push로 상태를 수정
    });
  };

  // Delete a mentor from the list
  const handleDelete = () => {
    const name = prompt('Whose name would you like to delete?');

    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
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
