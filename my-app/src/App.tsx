import React from 'react';
import logo from './logo.svg';
import './App.css';

import Covid19App from './components/Covid19App';
import Container from '@material-ui/core/Container';
import LandingPage from './components/landing-page/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container maxWidth="md">
          <LandingPage />
          <Covid19App />
        </Container>
      </header>
    </div>
  );
}

export default App;
