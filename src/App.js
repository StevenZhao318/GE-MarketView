import React from 'react';

import { Chart, ItemSelector, SearchBar } from './components';
import CurPriceCard from './components/Cards/CurPriceCard';

import { useState } from 'react';
import { Box, Center, VStack, Flex } from '@chakra-ui/react';

export default function App() {
  const [item, setItem] = useState('Clay');

  const handleItemsChange = async (itemID) => {
    console.log('switched Item = ' + itemID);
    setItem(itemID);
  };

  return (
    <Box>
      <Box p='50px 0 0 50px'>
        <SearchBar handleItemsChange={handleItemsChange} />
      </Box>
      {/* <CurPriceCard itemID={item} /> */}
      <Flex dir={{ lg: 'row', base: 'column' }}>
        <Center w='80%' m='40px'>
          <Chart itemID={item} />
        </Center>
        <Center
          as='center'
          bg='grey'
          w={{ lg: '10%', base: '90%' }}
          minH={{ lg: '500', base: '200px' }}
          m='40px 0 40px 0'
        >
          Info Card
        </Center>
      </Flex>
    </Box>
  );
}
