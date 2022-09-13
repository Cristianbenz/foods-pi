import { Route } from 'react-router-dom'

import Header from './sections/header';
import Home from './sections/home';
import RecipeDetails from './sections/recipeDetails';

import './App.css';

function App() {
  return (
    <>
      <Route exact path={'/'}>
        <Header />
      </Route>
      <Route path={'/home'}>
        <Home />
      </Route>
      <Route path={'/recipe/:recipeId'}>
        <RecipeDetails />
      </Route>
    </>
  );
}

export default App;
