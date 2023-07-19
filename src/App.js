import React from 'react';
import './App.css';
// All important imports are imported
import Screen from "./components/screen"
import Buttons from './components/buttons';
// importing store
import { store } from './app/store';
// importing Provider 
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <h1>React Redux Calculator</h1>
      {/*  providing store to provider */}
      <Provider store={store}>
      {/* Calling the necessary component */}
        <Screen/>
        <Buttons/>
        
      </Provider>
      
    </div>
  );
}

export default App;
