import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Tabs,
  Tab,
  Avatar,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export default function AuthForm() {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white' }}>
      <Paper elevation={10} sx={{ display: 'flex', borderRadius: 3, overflow: 'hidden', maxWidth: 900, width: '100%' }}>
        <Box sx={{ bgcolor: '#8b5cf6', color: '#fff', p: 5, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome Back
          </Typography>
          <Typography variant="body1" textAlign="center">
            Sign in to access your account and <br /> continue your journey with us.
          </Typography>
          <Avatar sx={{ mt: 5, bgcolor: '#a78bfa', width: 80, height: 80 }}>
            {tab === 0 ? <LockOutlinedIcon fontSize="large" /> : <PersonAddAltIcon fontSize="large" />}
          </Avatar>
        </Box>

        <Box sx={{ flex: 1.2, p: 5, bgcolor: '#020617' }}>
          <Tabs value={tab} onChange={handleChange} centered sx={{ mb: 3 }}>
            <Tab label="Login" sx={{ color: '#fff' }} />
            <Tab label="Sign Up" sx={{ color: '#fff' }} />
          </Tabs>

          {tab === 0 ? (
            // Login Form
            <Box component="form" noValidate>
              <TextField fullWidth label="Email" margin="normal" required InputProps={{ style: { color: 'white' } }} InputLabelProps={{ style: { color: 'white' } }} />
              <TextField fullWidth label="Password" type="password" margin="normal" required InputProps={{ style: { color: 'white' } }} InputLabelProps={{ style: { color: 'white' } }} />
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <FormControlLabel
                  control={<Checkbox sx={{ color: '#8b5cf6' }} />}
                  label={<Typography variant="body2" color="white">Remember me</Typography>}
                />
                <Link href="#" variant="body2" color="#8b5cf6">
                  Forgot password?
                </Link>
              </Box>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: '#8b5cf6' }}>
                🔑 Sign in
              </Button>
              <Typography align="center" color="gray">
                OR CONTINUE WITH
              </Typography>
              <Grid container spacing={2} mt={1} justifyContent="center">
                <Grid item>
                  <Button variant="outlined" sx={{ borderColor: '#475569', color: '#fff' }}>🐱</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" sx={{ borderColor: '#475569', color: '#fff' }}>🐦</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" sx={{ borderColor: '#475569', color: '#fff' }}>📘</Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            // Sign Up Form
            <Box component="form" noValidate>
              <TextField fullWidth label="Full Name" margin="normal" required InputProps={{ style: { color: 'white' } }} InputLabelProps={{ style: { color: 'white' } }} />
              <TextField fullWidth label="Email" margin="normal" required InputProps={{ style: { color: 'white' } }} InputLabelProps={{ style: { color: 'white' } }} />
              <TextField fullWidth label="Password" type="password" margin="normal" required InputProps={{ style: { color: 'white' } }} InputLabelProps={{ style: { color: 'white' } }} />
              <TextField fullWidth label="Confirm Password" type="password" margin="normal" required InputProps={{ style: { color: 'white' } }} InputLabelProps={{ style: { color: 'white' } }} />
              <FormControlLabel
                control={<Checkbox sx={{ color: '#8b5cf6' }} />}
                label={<Typography variant="body2" color="white">I agree to the Terms of Service and Privacy Policy</Typography>}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, bgcolor: '#8b5cf6' }}>
                <PersonAddAltIcon sx={{ mr: 1 }} /> Create account
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
