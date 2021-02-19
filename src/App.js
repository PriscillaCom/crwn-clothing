import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.jsx';
import './App.css';

function App() {
  return (
    <div>
      {/* Switch gives user more control of what to render, find ONE 
      Path that matches and it'll load it, won't load multiple paths */}
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;
