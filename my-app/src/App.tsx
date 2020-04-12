import React from 'react';
import logo from './logo.svg';
import './App.css';

import Covid19App from './components/Covid19App';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Covid19App />
      </header>
    </div>
  );
}

export default App;
