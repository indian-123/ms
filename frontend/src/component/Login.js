import { TextField, Button, Box, Alert, Typography, CircularProgress } from '@mui/material';

import { NavLink, useNavigate } from 'react-router-dom';


const UserLogin = () => {



  return <>

    <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' >
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <Box textAlign='center'>
        <Button  variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
      </Box>
      <NavLink >Forgot Password ?</NavLink>
    </Box>
  </>;
};

export default UserLogin;
