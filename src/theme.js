import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'proxima-nova',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  components: {
    Button: {},
  },
  colors: {
    white: {
      border: '#B9B9BA',
    },
    background: {
      0: '#40444B', // background - lightest
      100: '#36393F',
      200: '#262A2E', //
    },
    transparent: 'transparent',
    black: '#000',
    rsYellow: '#FFE37E',
    error: 'red',
    green: '#15CD83',
    darkNavy: 'rgb( 31, 48, 88 )',
  },
});

export default theme;
