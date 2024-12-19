import React, { useState } from 'react';

// Input data in a form is considered an uncontrolled component when its value is managed by the DOM,
// allowing the user to change and see the value immediately without React tracking it.
// Therefore, when using forms, it's recommended to always use state to manage the value of inputs.
// The value attribute of the input should reflect the state, and the onChange event should be used
// to update the state whenever the user makes a change. This ensures the form behaves as a controlled component,
// keeping the input's value synchronized with React state.

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor='email'>Email: </label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />

      <button>Submit</button>
    </form>
  );
}
