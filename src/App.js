import React, { useState } from 'react';
import Other from './components/Other'
import logo from './logo.svg';
import './App.css';
import ExampleContext from './components/ExampleContext';

function App() {
  const [data, setData] = useState('')
  return (
    <div className="App">
      <h2>This is a React app</h2>
      <input onChange={e => setData(e.target.value)}></input>
      <ExampleContext.Provider value={{data:data, setData:setData}}>
        <Other/>
      </ExampleContext.Provider>
    </div>
  );
}

export default App;
