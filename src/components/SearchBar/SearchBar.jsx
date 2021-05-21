/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { Text } from '@chakra-ui/react';
import { Icon, Typography } from '@material-ui/core';
import { itemNames, nameToID } from '../../data/ItemList';

const filterLimit = createFilterOptions({
  limit: 12,
});

const getIconFromID = (id) => {
  const endpoint = 'https://www.osrsbox.com/osrsbox-db/items-icons/';
  return (
    <img
      src={endpoint + id + '.png'}
      alt='iconImage'
      width='35px'
      height='35px'
    />
  );
};

const SearchBar = ({ handleItemsChange }) => {
  return (
    <div style={{ width: 500 }}>
      <Autocomplete
        // freeSolo
        disableClearable
        options={itemNames} //.map((option) => option.name)
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => {
          // const id = nameToID[value];
          // console.log("Selected Item: " + value + " ID: " + id);
          handleItemsChange(value.name);
        }}
        renderOption={(option) => (
          <>
            <Icon
              style={{
                width: '35px',
                height: '35px',
                paddingRight: '10px',
                paddingTop: '5px',
              }}
            >
              {getIconFromID(option.id)}
            </Icon>
            <Text style={{ fontSize: '16px' }}>{option.name}</Text>
          </>
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
              style: { fontSize: '16px' },
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
