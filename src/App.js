import React from 'react';
import './App.css';
import Screen from "./components/screen"
import Buttons from './components/buttons';
function App() {
  return (
    <div className="App">
      <h1>React Redux Calculator</h1>
      <Screen/>
      <Buttons/>
    </div>
  );
}

export default App;
