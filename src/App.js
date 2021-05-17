import React from 'react';

import { Chart, ItemSelector, SearchBar } from './components';
import CurPriceCard from './components/Cards/CurPriceCard';

import styles from './App.module.css';
import { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';

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

      <Center>
        <Chart itemID={item} />
      </Center>
    </Box>
  );
}
