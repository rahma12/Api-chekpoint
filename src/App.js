import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import UserList from './UserList';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <UserList />
      </header>
    </div>
  );
}

export default connect()(App);
