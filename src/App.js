import { Fragment } from 'react';
import './App.css';

// Use <Fragment> or <> to return multiple elements without adding extra nodes to the DOM

function App() {
  // Variable declaration
  const name = 'amy';
  const list = ['Milk', 'Strawberry', 'Banana'];
  return (
    <Fragment>
      {/* Apply CSS styles using a className */}
      <h1 className='orange'>Hello!</h1>
      <h2>Hello!</h2>
      {/* Use {} to embed JavaScript variables in JSX */}
      <p>{name}</p>

      {/* Render a list of items */}
      <ul>
        {/* <li>Milk</li>
        <li>Strawberry</li>
        <li>Banana</li> */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      {/* 
        Double curly braces {{ }} are used here because:
        - The **outer curly braces `{}`** indicate a JavaScript expression in JSX.
        - The **inner curly braces `{ ... }`** represent a JavaScript object containing CSS properties and values.
        Together, this allows React to pass an inline style object to the `style` attribute.
    */}
      <img
        style={{ width: '200px', height: '200px' }}
        src='https://amysblog.netlify.app/_next/image?url=%2Fimages%2Fposts%2Fassignment3.png&w=828&q=75'
        alt=''
      />
    </Fragment>
  );
}

export default App;
