import React from 'react';
import './App.css';
import Heart from './Heart';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
        <Heart />
  </ChakraProvider>
  );
}

export default App;
