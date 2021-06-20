import React from 'react';
import { Chart, SearchBar } from './components';
import ItemInfo from './components/Cards/ItemInfo';
import { useState } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import NotSupported from './components/Chart/NotSupported';

export default function App() {
  const [item, setItem] = useState(`Zulrah's scales`);

  const handleItemsChange = async (itemID) => {
    console.log('switched Item = ' + itemID);
    setItem(itemID);
  };

  return (
    <Box h='100vh' bg='background.100'>
      <Box p='30px 50px'>
        <SearchBar handleItemsChange={handleItemsChange} />
      </Box>

      <Flex
        flexDir={{ lg: 'row', base: 'column' }}
        m='0 auto'
        justifyContent='center'
      >
        <Center w='80%' display={{ lg: 'flex', base: 'none' }}>
          <Chart itemID={item} />
        </Center>
        <Center m='40px 40px' display={{ lg: 'none', base: 'flex' }}>
          <NotSupported />
        </Center>

        <Center ml={{ lg: '30px' }} bg='background.100'>
          <ItemInfo w='180px' item={item} />
        </Center>
      </Flex>
    </Box>
  );
}
