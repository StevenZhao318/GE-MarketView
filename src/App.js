import React from 'react';

import { Chart, ItemSelector, SearchBar } from './components';
import CurPriceCard from './components/Cards/CurPriceCard';

import styles from './App.module.css';
import NewChart from './components/Chart/Chart';
import { useState } from 'react';

export default function App() {
  const [item, setItem] = useState('Clay');

  const handleItemsChange = async (itemID) => {
    console.log('switched Item = ' + itemID);
    setItem(itemID);
  };

  return (
    <div className={styles.container}>
      <SearchBar handleItemsChange={handleItemsChange} />
      {/* <CurPriceCard itemID={item} /> */}

      <Chart itemID={item} styles={{ display: 'block' }} />
    </div>
  );
}
