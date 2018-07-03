import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieSearch from './MovieSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieSearch />
      </div>
    );
  }
}

export default App;
