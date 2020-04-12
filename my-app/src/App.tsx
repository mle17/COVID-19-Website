import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GetNumberDaysQuarantined } from "./components/GetNumberDaysQuarantined";
import UsStateSelect from "./components/UsStateSelect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {UsStateSelect()}
        {GetNumberDaysQuarantined()}
      </header>
    </div>
  );
}

export default App;
