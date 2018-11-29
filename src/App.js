import React, { Component } from 'react';
import './App.css';
import NavHeader from './nav/navHeader';
import Main from './mainPage/main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Main />
      </div>
    );
  }
}

export default App;
