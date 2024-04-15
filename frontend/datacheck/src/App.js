// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, Container } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import Hashing from './components/Hashing';
import Verification from './components/Verification';
import Footer from './components/Footer';
import theme from './components/Theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/hashing" element={<Hashing />} />
            <Route path="/verification" element={<Verification />} />
          </Routes>
        </Container>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
