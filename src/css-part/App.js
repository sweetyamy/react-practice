import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import StyledComponent from './StyledComponent';

// BEM(Block, Element, Modifier)
// Block: menu, button, card
// Element: menu__item, button__icon, card__title
// Modifier: menu--dark, button--disabled, card--highlighted

// postcss - Name.module.css

function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <StyledComponent />
    </>
  );
}

export default App;
