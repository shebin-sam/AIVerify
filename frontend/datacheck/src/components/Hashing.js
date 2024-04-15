// components/Hashing.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Container, Box } from '@mui/material';

import DataValContract from "../DataVal.json";

const Hashing = () => {
    const ethers = require("ethers");
  const [input, setInput] = useState('');
  

//   const handleSubmit = () => {
//     // Call your API with input1 and input2
//     console.log('API called with input1:', input1, 'and input2:', input2);
//   };
  const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
  const signer = provider.getSigner();
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 
  const contractABI = DataValContract.abi;
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const [found,setFound] = useState('Verify');
  const handleSubmit = async () => {
    
    try {
      const found1 = await contract.searchData(input);
      console.log(found1);
      setFound(String(found1));
    //   setResult(found ? "Data found" : "Data not found");
    } catch (error) {
      console.error("Error searching data:", error);
    //   setResult("Error searching data");
    }
  };

  return (
    <div style={{ marginBottom: '100px', backgroundColor: '#112244', minHeight: 'calc(100vh - 64px)' }}>
      <Container>
        <Box my={4}>
          <Typography variant="h4" style={{ marginBottom: '20px', color: '#ffd700' }}>
           Verify AI Generated Content
          </Typography>
          {/* <Grid container spacing={2} justifyContent="center"> */}
            <Grid item xs={12} md={6}>
              <Typography variant="body1" style={{ color: '#ffffff' }}>
                Content
              </Typography>
              <TextField
                label="Enter Content"
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                fullWidth
                margin="normal"
                InputProps={{ style: { color: '#000000', backgroundColor: '#ffffff' } }}
              />
            </Grid>
            
          {/* </Grid> */}
          <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
            Verify
          </Button>
          {found && (
            <TextField
              label="Verification"
              variant="outlined"
              value={found}
              fullWidth
              margin="normal"
              InputProps={{ readOnly: true }}
              style={{ borderRadius: '20px', marginTop: '20px' }}
            />
          )}
        </Box>
      </Container>
    </div>
  );
}

export default Hashing;
