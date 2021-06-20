import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { Text, Flex } from '@chakra-ui/react';
import { Icon } from '@material-ui/core';
import { itemNames } from '../../data/ItemList';
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
  clearIndicatorDirty: {
    color: 'gray',
  },
  noOptions: {
    color: '#FFFFFFCC',
  },
  endAdornment: {
    display: 'none',
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
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <Box className={className} w='100%' bgColor='#262A2E'>
      <Autocomplete
        open={open}
        onOpen={() => {
          if (inputValue) {
            setOpen(true);
          }
        }}
        onClose={() => {
          setOpen(false);
        }}
        inputValue={inputValue}
        onInputChange={(e, value, reason) => {
          setInputValue(value);
          if (!value) {
            setOpen(false);
          }
        }}
        defaultValue={[]}
        autoHighlight
        disableClearable
        options={itemNames}
        classes={styles}
        getOptionLabel={(option) => option.name || ''}
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
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search Item'
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
