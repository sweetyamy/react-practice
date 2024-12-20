import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import styled, { css } from 'styled-components';

// BEM(Block, Element, Modifier)
// Block: menu, button, card
// Element: menu__item, button__icon, card__title
// Modifier: menu--dark, button--disabled, card--highlighted

// postcss - Name.module.css

// styled component
const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `}
`;

function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
    </>
  );
}

export default App;
