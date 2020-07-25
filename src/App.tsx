import React from 'react';
import AddUser from './components/addUser';
import './App.css';
import Users from './components/users';

function App() {
  return (
    <div className="App">
      <AddUser />
      <Users />
    </div>
  );
}

export default App;
