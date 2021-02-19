import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';

function App() {

  const HatsPage = () => (
    <div>
      <h1> Hats Page</h1>
    </div>
  );

  return (
    <div>
      {/* Switch gives user more control of what to render, find ONE 
      Path that matches and it'll load it, won't load multiple paths */}
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App;
