import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx'

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //Grab current user's info from auth and storing into db
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot,
              ...snapShot.data()
            }
          });
        });
      }
     else {
       this.setState({ currentUser: userAuth });
     }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        {/* Switch gives user more control of what to render, find ONE 
        Path that matches and it'll load it, won't load multiple paths */}
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
 
}

export default App;
