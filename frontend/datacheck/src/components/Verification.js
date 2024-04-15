import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Container, Box } from '@mui/material';
import DataValContract from "../DataVal.json";
import axios from 'axios';

const Verification = () => {
  const ethers = require("ethers");
  const [input, setInput] = useState('');
  const [hash,setHash] = useState('Ask a Question');
  const [generatedText, setGeneratedText] = useState('Ask a Question');
  const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
  const signer = provider.getSigner();
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 
  const contractABI = DataValContract.abi;
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
  const handleSubmit = async () => {
    let a ="";
    console.log(input);
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/generate_text/generate/',
        { input: input }
      );
      setGeneratedText(response.data.generated_text); // Assuming the response contains 'generated_text' field
      console.log(response.data.generated_text);
      // a = response.data.generated_Text;
      try {
      const transaction = await contract.storeHashData("user",response.data.generated_text);
      console.log(transaction);
      setHash(transaction['hash']);
    }
      
      catch (error) {
        console.error("Error storing data:", error);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error appropriately
    }
  }

  return (
    <div style={{ marginBottom: '100px', backgroundColor: '#112244', minHeight: 'calc(100vh - 64px)' ,borderRadius:'20px'}}>
      <Container>
        <Box my={4}>
          <Typography variant="h4" style={{ marginBottom: '20px', color: '#ffd700' }}>
            Generate Content
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="body1" style={{ color: '#ffffff' }}>
                Enter Question
              </Typography>
              <TextField
                label="Enter Question"
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                fullWidth
                margin="normal"
                InputProps={{ style: { color: '#000000', backgroundColor: '#ffffff', borderRadius: '20px' } }}
                style={{ borderRadius: '20px' }}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: '20px', borderRadius: '20px' }}
          >
            Ask
          </Button>
          {generatedText && (
            <TextField
            id="dynamic-textfield"
            label="Generated Text"
            variant="outlined"
            value={generatedText}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
            style={{ borderRadius: '20px', marginTop: '20px' }}
          />
          )}

{hash && (
            <TextField
              label="Generated Text Hash"
              variant="outlined"
              value={hash}
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

export default Verification;
