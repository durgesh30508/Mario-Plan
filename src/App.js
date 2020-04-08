import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Dashboard from './Dashboard/Dashboard';
import ProjectDetails from './Projects/Projectdetail'
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import CreateProject from './Projects/CreateProject';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Navbar />
       <Switch>
       <Route exact path='/' component={Dashboard} />
       <Route path='/project/:id' component={ProjectDetails} />
       <Route path='/signin' component={SignIn} />
       <Route path='/signup' component={SignUp} />
       <Route path='/create' component={CreateProject} />
       </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
