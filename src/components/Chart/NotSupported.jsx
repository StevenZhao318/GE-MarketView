import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const NotSupported = () => {
  return (
    <Box>
      <Heading size='h4' textAlign='center'>
        Charts currently not supported on mobile
      </Heading>
    </Box>
  );
};

export default NotSupported;
