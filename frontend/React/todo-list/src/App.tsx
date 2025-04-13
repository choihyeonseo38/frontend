import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';

function App() {

  let name = '리액트';

  return (
    <div className='container'>
      <Todolist></Todolist>
    </div>
  );
}

export default App;