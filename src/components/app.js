import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


import Navigation from './pages/navbar';
import Home from './pages/home';
import Task from './pages/tasks';
import Login from './auth/login';
import taskManager from './pages/task-manager';

export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        

       <Router>
         <div>
           <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/tasks" component={Task} />
             <Route path="/task-manager" component={taskManager} />


           </Switch>
         </div>
         
       </Router>
        
        

        
      </div>
    );
  }
}

