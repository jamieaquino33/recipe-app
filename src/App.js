import React from 'react';
import './App.css';
import RecipeSearcher from './components/RecipeSearcher/RecipeSearcher';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import About from './About/About';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to ='/about'>About</Link>
          </li>
        </ul>
      </nav>

      {/* The Switch component looks through the Route components inside of it and renders the first one that matches the current URL */}
      <Switch>
        <Route exact path='/'>
          <RecipeSearcher />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
