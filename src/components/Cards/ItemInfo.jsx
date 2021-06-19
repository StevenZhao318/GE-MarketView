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
  Stack,
  Heading,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { fetchItemInfo } from '../../api';
import { itemNames, nameToID } from '../../data/ItemList';
import MembersIcon from '../../assets/members-icon.png';
import NonMembersIcon from '../../assets/nonmembers-icon.png';

const ItemInfo = ({ item }) => {
  const [itemSummary, setItemSummary] = useState({});

  const getIconFromID = (id) => {
    const endpoint = 'https://www.osrsbox.com/osrsbox-db/items-icons/';
    return (
      <Image src={endpoint + id + '.png'} alt='iconImage' w='40px' h='40px' />
    );
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
    <VStack w='100%' h='100%' bg='background.200' justify='center'>
      <Heading as='h2' size='md' textColor='whiteAlpha.900'>
        {item}
      </Heading>
      <Box>{getIconFromID(itemSummary.id)}</Box>

      <Text textColor='whiteAlpha.800'>
        High Alch Value: {itemSummary.highalch?.toLocaleString()}
      </Text>
      <Text textColor='whiteAlpha.800'>
        Low Alch Value: {itemSummary.lowalch?.toLocaleString()}
      </Text>
      <Text textColor='whiteAlpha.800'>
        Buy Limit: {itemSummary.buy_limit?.toLocaleString()}
      </Text>

      <Flex justifyContent='center' mb='30px'>
        <Text textColor='whiteAlpha.800' marginRight='10px'>
          Members:{' '}
        </Text>
        {itemSummary.members ? (
          <Image src={MembersIcon} h='15px' alignSelf='center' />
        ) : (
          <Image src={NonMembersIcon} h='15px' alignSelf='center' />
        )}
      </Flex>

      <Stack maxW='150px' spacing='10px' justifyContent='center' display='flex'>
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
      </Stack>
    </VStack>
  );
};

export default ItemInfo;
