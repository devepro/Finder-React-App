import React, { Component } from 'react';
import './App.css';
import Todo from './container/Todo';
import './bootstrap.css'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo></Todo>
      </div>
    );
  }
}
export default App;