import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Nav from './components/Nav'
import Store from './components/Store'
import Cart from './components/Cart'
import Home from './components/Home'



function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/'><Home/></Route>
      <Route path='/store'><Store/></Route>
      <Route path='/cart'><Cart/></Route>
      
    </div>
  );
}

export default App;
