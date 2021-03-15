/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

import { itemNames, nameToID } from "../../data/ItemList.js";

const filterLimit = createFilterOptions({
  limit: 100,
});

const SearchBar = ({ handleItemsChange }) => {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        // freeSolo
        disableClearable
        options={itemNames.map((option) => option.name)}
        onChange={(event, value) => {
          const id = nameToID[value];
          console.log("Selected Item: " + value + " ID: " + id);
          handleItemsChange(id);
        }}
        filterOptions={filterLimit}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Item"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
