import React from 'react';
import './App.css';
import FunctionCounter from './components/FunctionCounter';
import ClassCounter from './components/ClassCounter';

function App() {
  return (
    <div className="App">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="counter-container">
        <FunctionCounter />
        <ClassCounter />
      </div>
    </div>
  );
}

export default App;
