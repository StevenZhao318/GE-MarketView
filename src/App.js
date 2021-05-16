import React from 'react';

import { Chart, ItemSelector, SearchBar } from './components';
import CurPriceCard from './components/Cards/CurPriceCard';

import styles from './App.module.css';
import NewChart from './components/Chart/NewChart';
import { useState } from 'react';

// Mort Myre = 2970
// Dynamite = 13573
// dragon harpoon = 21028
// Smouldering = 13233

export default function App() {
  const [item, setItem] = useState('Clay');

  const handleItemsChange = async (itemID) => {
    console.log('switched Item = ' + itemID);
    setItem(itemID);
  };

  return (
    <div className={styles.container}>
      {/* <ItemSelector handleItemsChange={this.handleItemsChange} /> */}
      <SearchBar handleItemsChange={handleItemsChange} />
      {/* <CurPriceCard itemID={item} /> */}
      {/* <NewChart item={"item"} /> */}
      {/* 
        <Chart itemID={item} /> */}
      <NewChart itemID={item} />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
