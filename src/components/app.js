import React, { Component } from 'react';

import Login from './auth/login';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <Login />
      </div>
    );
  }
}
