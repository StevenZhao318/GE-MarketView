import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'proxima-nova',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  components: {
    Button: {},
    Heading: {
      defaultProps: {},
      sizes: {
        xs: {
          fontSize: '20px',
          color: 'bodyWhite',
        },
        sm: {
          fontSize: '24px',
          color: 'bodyWhite',
        },
        md: {
          fontSize: '32px',
          color: 'bodyWhite',
        },
        lg: {
          fontSize: '52px', // 52px
          fontWeight: 700,
          color: 'bodyWhite',
        },
        h4: {
          fontSize: '21px',
          fontWeight: 700,
          color: 'bodyWhite',
        },
        h5: {
          fontSize: '16px',
          fontWeight: 700,
          color: 'bodyWhite',
        },
      },
    },
  },
  colors: {
    bodyWhite: '#FFFFFFCC',
    background: {
      0: '#40444B', // background - lightest
      100: '#36393F',
      200: '#262A2E', //
    },
    rsYellow: '#FFE37E',
    error: 'red',
  },
});

export default theme;
