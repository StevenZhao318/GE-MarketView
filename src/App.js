import React from 'react';

import { Chart, ItemSelector, SearchBar } from './components';
import ItemInfo from './components/Cards/ItemInfo';

import { useState } from 'react';
import { Box, Center, VStack, Flex } from '@chakra-ui/react';

export default function App() {
  const [item, setItem] = useState('Clay');

  const handleItemsChange = async (itemID) => {
    console.log('switched Item = ' + itemID);
    setItem(itemID);
  };

  return (
    <Box h='100%'>
      <Box p='50px 0 0 50px'>
        <SearchBar handleItemsChange={handleItemsChange} />
      </Box>

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
          <ItemInfo item={item} />
        </Center>
      </Flex>
    </Box>
  );
}
