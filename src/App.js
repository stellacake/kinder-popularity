import React from 'react';
import './App.css';
import Treats from './components/TreatList';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Kinder playground!</h1>
      <div className="cards">
      <Treats />
      </div>
    </div>
  );
}

export default App;
