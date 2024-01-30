import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css' ctrl + /
import { Box, Button, TextField, Typography } from '@mui/material';
import { IconBox } from '@tabler/icons-react';
import UseRouter from './config/routings/route';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <UseRouter /> 
    </BrowserRouter>
  )
}

export default App
