// components/Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="fixed" style={{ top: 'auto', bottom: 0, backgroundColor: '#112244' }}>
      <Container>
        <Toolbar>
          <Typography variant="body1" style={{ flexGrow: 1, color: 'white' }}>
            © 2024 Blockchain Based AI Generated Content Verification
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
