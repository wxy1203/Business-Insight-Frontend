import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';


function UserInput() {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  

  return (

    <div>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#282c34' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontWeight: 'bold' }}>
            Request2SQL
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>

      <Stack sx={{ width: "33%", mx: 'auto', mt: '2rem', mb: '1rem'}} spacing={2} >
        <Alert severity="info">This page is to help you create SQL queries for the database.</Alert>
      </Stack>

      <p>
        Please choose relevant phrase from the buttons below and fill in the blanks.<br />
        <br />
        Here are some examples of queries you can make:<br />
        - What is Doctor Tan's ID?<br />
        - What is the name of the patient with ID 001?<br />
        - Which date did Doctor Tan issued the prescription with ID 010?<br />
        - What is the dosage for the medication with ID 100?<br />
      </p>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="outlined"
          sx={{
            fontSize: '15px', 
            borderWidth: '2px',
          }}
        > Patients
        </Button>
        <Button variant="outlined"
          sx={{
            fontSize: '15px', 
            borderWidth: '2px',
          }}
        > Doctors
        </Button>
        <Button variant="outlined"
          sx={{
            fontSize: '15px', 
            borderWidth: '2px',
          }}
        > Prescriptions
        </Button>
        <Button variant="outlined"
          sx={{
            fontSize: '15px', 
            borderWidth: '2px',
          }}
        > Medications
        </Button>
        <Button variant="outlined"
          sx={{
            fontSize: '15px', 
            borderWidth: '2px',
          }}
        > Prescription Details
        </Button>
      </Stack>
    
      <br />

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '75ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          id="outlined-basic" 
          label="Query" 
          variant="outlined"
          value={query}
          onChange={handleQueryChange} />
      </Box>
        entered queries: {query}
    </div>


  );
  
}

export default UserInput;