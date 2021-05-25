import React, { useState, useEffect } from 'react';
import {
  Box,
  Center,
  VStack,
  Flex,
  Text,
  Link,
  Image,
  Icon,
  Button,
  HStack,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { fetchItemInfo } from '../../api';
import { itemNames, nameToID } from '../../data/ItemList';

const ItemInfo = ({ item }) => {
  const [itemSummary, setItemSummary] = useState({});

  const getIconFromID = (id) => {
    const endpoint = 'https://www.osrsbox.com/osrsbox-db/items-icons/';
    return <Image src={endpoint + id + '.png'} alt='iconImage' w='30' h='30' />;
  };

  useEffect(() => {
    console.log('Fetching current Price for ... ' + item);
    const fetchAPI = async () => {
      const itemID = nameToID[item];
      const data = await fetchItemInfo(itemID);
      setItemSummary(data);
    };
    fetchAPI();
    console.log(itemSummary);
  }, [item]);

  return (
    <Box>
      <Box>{getIconFromID(itemSummary.id)}</Box>
      <Text>Item Name: {item}</Text>
      <Text>High Alch Value: {itemSummary.highalch}</Text>
      <Text>Low Alch Value: {itemSummary.lowalch}</Text>
      <Text>Members?: {itemSummary.members ? 'true' : 'false'}</Text>

      <HStack spacing='10px'>
        <Button>
          <Link
            w='100px'
            color='blue.600'
            href={itemSummary.wiki_url}
            isExternal
          >
            Wiki URL <ExternalLinkIcon mx='2px' marginBottom='5px' />
          </Link>
        </Button>
        <Button>
          <Link
            w='100px'
            color='blue.600'
            href={`https://prices.runescape.wiki/osrs/item/${itemSummary.id}`}
            isExternal
          >
            Live Prices <ExternalLinkIcon mx='2px' marginBottom='5px' />
          </Link>
        </Button>
        <Button>
          <Link
            w='100px'
            color='blue.600'
            href={`https://secure.runescape.com/m=itemdb_oldschool/viewitem?obj=${itemSummary.id}`}
            isExternal
          >
            Official <ExternalLinkIcon mx='2px' marginBottom='5px' />
          </Link>
        </Button>
      </HStack>
    </Box>
  );
};

export default ItemInfo;
