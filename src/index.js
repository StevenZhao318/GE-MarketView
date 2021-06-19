import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './theme';

import App from './App';

ReactDOM.render(
  <ChakraProvider theme={Theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
