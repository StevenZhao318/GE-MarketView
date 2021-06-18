/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { Text } from '@chakra-ui/react';
import { Icon, Typography } from '@material-ui/core';
import { itemNames, nameToID } from '../../data/ItemList';
import { chakra, Box } from '@chakra-ui/react';

const filterLimit = createFilterOptions({
  limit: 10,
});

const getIconFromID = (id) => {
  const endpoint = 'https://www.osrsbox.com/osrsbox-db/items-icons/';
  return (
    <img src={endpoint + id + '.png'} alt='iconImage' width='28' height='28' />
  );
};

export default chakra(function SearchBar({ handleItemsChange, className }) {
  return (
    <Box className={className} w='500px'>
      <Autocomplete
        defaultValue={[]}
        disableClearable
        options={itemNames}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => {
          handleItemsChange(value.name);
        }}
        renderOption={(option) => (
          <>
            <Icon
              style={{
                width: 'auto',
                height: '100%',
                paddingRight: '10px',
              }}
            >
              {getIconFromID(option.id)}
            </Icon>
            <Text style={{ fontSize: '16px' }}>{option.name}</Text>
          </>
        )}
        filterOptions={filterLimit}
        freeSolo
        autoHighlight
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search Item'
            variant='outlined'
            InputProps={{
              ...params.InputProps,
              type: 'search',
              style: { fontSize: '16px' },
            }}
          />
        )}
      />
    </Box>
  );
});
