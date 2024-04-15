// components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          Home
        </Typography>
        <Typography variant="h6" component={Link} to="/hashing" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          Verification
        </Typography>
        <Typography variant="h6" component={Link} to="/verification" style={{ textDecoration: 'none', color: 'white' }}>
          Generate
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
