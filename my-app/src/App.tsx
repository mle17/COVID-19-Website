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
        <Container maxWidth="xl">
          <CovidAppBar />
          <Box p={1}>
            p={1}
          </Box>
          <Container maxWidth="md">
            <LandingPage />
            <Covid19App />
          </Container>
        </Container>
      </header>
    </div>
  );
}

export default App;
