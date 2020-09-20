import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './hello/hello'
import EmComp from './emodemo/emComp'
import EmComp1 from './emodemo/emComp1'
import EmComp2 from './emodemo/emComp2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello></Hello>
        <EmComp></EmComp>
        <EmComp1></EmComp1>
        <EmComp2></EmComp2>

        <h2 className="font-color">hello not blue</h2>
      </header>
    </div>
  );
}

export default App;
