/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { Text, Flex } from '@chakra-ui/react';
import { Icon, Typography } from '@material-ui/core';
import { itemNames, nameToID } from '../../data/ItemList';
import { chakra, Box } from '@chakra-ui/react';
import { makeStyles } from '@material-ui/core/styles';

const filterLimit = createFilterOptions({
  limit: 10,
});

const yellow = '#FFE37E';

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#262A2E',
  },
  option: {
    '&[data-focus="true"]': {
      backgroundColor: '#3E454D !important',
    },
    // '&[aria-selected="true"]': {
    //   backgroundColor: '#ebb678 !important',
    // },
  },
  inputLabelRoot: {
    fontColor: '#FFE37E',
  },
  inputRoot: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#B9B9BA',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
  },
});

const getIconFromID = (id) => {
  const endpoint = 'https://www.osrsbox.com/osrsbox-db/items-icons/';
  return (
    <img src={endpoint + id + '.png'} alt='iconImage' width='28' height='28' />
  );
};

export default chakra(function SearchBar({ handleItemsChange, className }) {
  const styles = useStyles();

  return (
    <Box className={className} w='500px' bgColor='#262A2E'>
      <Autocomplete
        defaultValue={[]}
        disableClearable
        options={itemNames}
        classes={styles}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => {
          handleItemsChange(value.name);
        }}
        renderOption={(option) => (
          <Flex>
            <Icon
              style={{
                width: 'auto',
                height: '100%',
                paddingRight: '10px',
              }}
            >
              {getIconFromID(option.id)}
            </Icon>
            <Text color='#FFE37E' fontSize='16px'>
              {option.name}
            </Text>
          </Flex>
        )}
        filterOptions={filterLimit}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search Item'
            fontColor='white'
            variant='outlined'
            InputProps={{
              ...params.InputProps,
              type: 'search',
              style: { fontSize: '16px', color: yellow },
            }}
            InputLabelProps={{ style: { fontSize: '16px', color: 'white' } }}
          />
        )}
      />
    </Box>
  );
});
