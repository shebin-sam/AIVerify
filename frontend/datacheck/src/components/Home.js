// components/Home.js
import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h2" style={{ marginBottom: '20px' }}>
        Welcome to Blockchain Based AI Generated Content Verification
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '20px' }}>
        We provide a secure and efficient way to verify content using blockchain technology and AI algorithms.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/hashing">
            Go to Verification
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/verification">
            Go to Generation
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
