import { Route } from 'react-router-dom'

import NavBar from './components/navBar';
import Header from './sections/header';
import Home from './sections/home';
import RecipeDetails from './sections/recipeDetails';
import RecipeCreator from './sections/recipeCreator';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Route exact path={'/'}>
        <Header />
      </Route>
      <Route path={'/home'}>
        <Home />
      </Route>
      <Route path={'/recipe/:recipeId'}>
        <RecipeDetails />
      </Route>
      <Route path={'/recipeCreator'}>
        <RecipeCreator />
      </Route>
    </>
  );
}

export default App;
