import React from 'react';
import Home from './components/Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
}from "react-router-dom"

class App extends React.Component{
  render() {
      return (
          <div className="App">
              <Home/>
          </div>
      );
  }
}

export default App;
