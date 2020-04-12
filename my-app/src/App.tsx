import React from 'react';
import logo from './logo.svg';
import './App.css';

import { NumberDaysQuarantinedForm } from "./components/NumberDaysQuarantinedForm";
import UsStatesForm from "./components/UsStatesForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UsStatesForm />
        <NumberDaysQuarantinedForm />
      </header>
    </div>
  );
}

export default App;
