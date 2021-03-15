import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

const Items = ({ handleItemsChange }) => {
  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleItemsChange(e.target.value)}
      >
        {/* {items.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))} */}

        <option value="21028">Dragon Harpoon</option>
        <option value="13233">Smouldering Stone</option>
        <option value="2970">Mort myre fungus</option>
        <option value="223">Red spiders' eggs</option>
        <option value="573">Air Orb</option>
        <option value="10034">Red chinchompa</option>
        <option value="13573">Dynamite</option>
        <option value="24229">Ornate maul handle</option>
        <option value="24587">Rune Pouch Note</option>
        <option value="12900">Uncharged toxic trident</option>
        <option value="12924">Toxic blowpipe (empty)</option>
        <option value="12929">Serpentine helm (uncharged)</option>
        <option value="22547">Craw's bow (u)</option>
        <option value="23956">Crystal armour seed</option>
        <option value="444">Gold Ore</option>
        <option value="563">Law Rune</option>
        <option value="5289">Palm tree seed</option>
        <option value="5502">Palm sapling</option>
      </NativeSelect>
    </FormControl>
  );
};

export default Items;
