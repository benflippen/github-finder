import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import axios from 'axios';
import Users from './components/users/Users';

class App extends Component{

  componentDidMount() {
    axios
    .get('https://api.github.com/users')
    .then(res => console.log(res.data));
  }

  render() { 
    return (
      <div className="App">
        <Navbar title = 'Github Finder' icon='fab fa-github'/>
        <div className= "container">
        <Users />

        </div>
      </div>
    );
    
  }
}

export default App;
