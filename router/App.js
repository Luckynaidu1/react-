import React, { Component } from 'react';
import Navbar from '/Navbar';
import Services from '/Services'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Contact from '/Contact';
 class App extends Component {
  render() {
    return <>
    <Router>
    <Navbar/>
<Switch>
    <Route path="/Services" component={Services}/>
    <Route path="/Contact" component={Contact}/> 
</Switch>
</Router> 
    </>;
  }
}
export default App