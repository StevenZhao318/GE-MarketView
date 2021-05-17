import React from 'react';

import { Chart, ItemSelector, SearchBar } from './components';
import CurPriceCard from './components/Cards/CurPriceCard';

import styles from './App.module.css';
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
      <Center>
        <SearchBar handleItemsChange={handleItemsChange} />
      </Center>
      {/* <CurPriceCard itemID={item} /> */}

      <Flex flexDir='row'>
        <Center w='80%' m='40px'>
          <Chart itemID={item} />
        </Center>
        <Center bg='grey' w='10%' m='40px 0 40px 0'>
          {' '}
          Common Items
        </Center>
      </Flex>
    </Box>
  );
}
