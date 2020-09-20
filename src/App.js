import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './hello/hello'
import EmComp from './emodemo/emComp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello></Hello>
        <EmComp></EmComp>

        <h2 className="font-color">hello not blue</h2>
      </header>
    </div>
  );
}

export default App;
