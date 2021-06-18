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
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    yellow: '#FFD80A',
    error: 'red',
    green: '#15CD83',
    darkNavy: 'rgb( 31, 48, 88 )',
    gray: {
      0: '#FFFFFF',
      100: '#F8F9FA',
      200: '#F1F3F5',
      300: '#E7EBEE',
      400: '#DEE2E6',
      500: '#CFD4DA',
      600: '#ADB5BD',
      700: '#868E96',
      800: '#69737C',
      900: '#485056',
      1000: '#343A40',
      1100: '#21242A',
      1200: '#101214',
      1300: '#000000',
    },
    blue: {
      0: '#F5F8FA',
      50: '#F5F8FA',
      100: '#E7EDF3',
      200: '#DDE6EE',
      300: '#CFD8E0',
      400: '#C7D2DD',
      500: '#3183C8',
      600: '#1A4971',
      700: '#334758',
      800: '#334250',
      900: '#1B2B3A',
      1000: '#192530',
    },
  },
});

export default theme;
