import React from 'react'
import { Switch,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

const App=() =>{
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}  />
      <Route path='/aboutus' component={About}  />
    </Switch>
    </>
  );
}

export default App