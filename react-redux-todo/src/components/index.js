import React, { Component } from 'react';
import Header from './header';
import TodoList from './todoList';
import AddTodo from './addTodo';

import '../styles/style.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="to-do-container">
            <AddTodo className="search" />
            <div className="space-between"></div>
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
