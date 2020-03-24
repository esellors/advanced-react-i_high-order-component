import React from 'react';
import './App.css';
import Person from './Components/Person';
import Typing from './Components/Typing';

function App() {
  return (
    <div className="App">
      <Person 
        name="Eric"
        age={21}
        isTall={true}
      />
      <Typing />
    </div>
  );
}

export default App;
