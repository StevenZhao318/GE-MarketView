import React from 'react';
import { Box, Button, chakra, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default chakra(function Component({ className, linkTo, children }) {
  return (
    <Box className={className}>
      <Button _hover={{ bg: 'blue.50' }}>
        <Link w='100px' color='blue.600' href={linkTo} isExternal >
          {children} <ExternalLinkIcon mx='2px' marginBottom='5px' />
        </Link>
      </Button>
    </Box>
  );
});
