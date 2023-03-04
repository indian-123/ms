import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography } from '@mui/material';


const Registration = () => {

  return <>

    <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' >
      <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
      <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
      <Box textAlign='center'>
        <Button variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
    </Box>
  </>;
};

export default Registration;
