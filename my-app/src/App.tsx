import React from 'react';
import './App.css';

import Covid19App from './components/Covid19App';
import Container from '@material-ui/core/Container';
import LandingPage from './components/landing-page/LandingPage';
import CovidAppBar from './components/CovidAppBar';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="xl" style={{padding: "0px"}}>
          <CovidAppBar />
          <div style={{
            background: "#a4a7f4"
          }}>
            <Box p={4}></Box>
            <Container maxWidth="md">
              <LandingPage />
            </Container>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
