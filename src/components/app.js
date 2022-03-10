import React, { Component } from 'react';
import { Route } from 'react-router';

import Navigation from './pages/navbar';
import Home from './pages/home';
import Login from './auth/login';

export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        

        <Home />
          
        
        

        
      </div>
    );
  }
}

