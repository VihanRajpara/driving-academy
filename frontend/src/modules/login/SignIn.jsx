import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Box,
  CircularProgress
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSnackbar } from '../../util/SnackbarProvider';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserProvider';

const sx = {
  borderRadius: "12px",
  background: "#fff",
  boxShadow: "0px 4px 15px rgba(26, 82, 118, 0.07)",
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    "& fieldset": {
      borderColor: "#1a537664",
      borderWidth: 1.5,
    },
    "&:hover fieldset": {
      borderColor: "#145A86",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1A5276",
      borderWidth: 2,
    },
  },
  "& .MuiInputLabel-root": {
    color: "#1A5276",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#1A5276",
  },
}

const SignIn = () => {
  const navigate = useNavigate();
  const { user, login, logout } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showSnackbar } = useSnackbar(); // ✅ Add Snackbar hook

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin(e);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      showSnackbar('Please enter both login ID and password.', 'warning');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (username.toLowerCase() === 'test.user' && password === 'user123') {
        showSnackbar('Login successful! 🎉', 'success');
        console.log('Login successful!');
        const userData = { name: 'vihan', username: 'Test User', loginId: 'test.user', email: 'vihan@gmail.com', number: '1234567890' };
        login(userData);
        // Redirect or set global state here
        navigate('/dashboard');
      } else {
        showSnackbar('Invalid login ID or password.', 'error');
      }
    } catch (err) {
      console.error('Login failed:', err);
      showSnackbar('Unexpected error during login.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        flexWrap: { xs: 'wrap', md: 'nowrap' }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: { xs: '85%', sm: '75%', md: '45%', lg: '35%' }
        }}
        gap={2}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#1A5276' }}>
            Hello! Welcome Back
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Sign in to access your dashboard.
          </Typography>
        </Box>

        <Box sx={{ width: '100%' }}>
          <Typography fontWeight="bold">Login Id:</Typography>
          <TextField
            type="text"
            margin="dense"
            id="loginId_input"
            placeholder="USER NAME"
            value={username}
            onKeyDown={handleKeyDown}
            onChange={(e) => setUsername(e.target.value)}
            required
            fullWidth
            InputProps={{
              style: { height: 50 }
            }}
            sx={sx}
          />
        </Box>

        <Box sx={{ width: '100%' }}>
          <Typography fontWeight="bold">Password:</Typography>
          <TextField
            id="password_input"
            placeholder="PASSWORD"
            margin="dense"
            onKeyDown={handleKeyDown}
            type={showPassword ? 'text' : 'password'}
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ mr: 1 }}>
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              style: { height: 50 }
            }}
            sx={sx}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 2
          }}
        >
          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{
              width: '100%',
              py: 1.1,
              fontWeight: 600,
              fontSize: "16px",
              borderRadius: "12px",
              background: "linear-gradient(90deg, #1A5276, #145A86)",
              boxShadow: "0px 4px 15px rgba(26, 82, 118, 0.4)",
              "&:hover": {
                background: "linear-gradient(90deg, #145A86, #0F466B)",
                boxShadow: "0px 6px 20px rgba(26, 82, 118, 0.5)",
              },
            }}
          >
            {isLoading ? <CircularProgress color="inherit" size={25} /> : <>Login</>}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
