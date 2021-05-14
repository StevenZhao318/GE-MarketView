import React from "react";

import { Chart, ItemSelector, SearchBar } from "./components";
import CurPriceCard from "./components/Cards/CurPriceCard";

import styles from "./App.module.css";
import NewChart from "./components/Chart/NewChart";

// Mort Myre = 2970
// Dynamite = 13573
// dragon harpoon = 21028
// Smouldering = 13233

class App extends React.Component {
  state = { item: "Clay" };

  handleItemsChange = async (itemID) => {
    console.log("switched Item = " + itemID);
    this.setState({ item: itemID });
  };

  render() {
    const { item } = this.state;
    return (
      <div className={styles.container}>
        {/* <ItemSelector handleItemsChange={this.handleItemsChange} /> */}
        <SearchBar handleItemsChange={this.handleItemsChange} />
        {/* <CurPriceCard itemID={item} /> */}
        {/* <NewChart item={"item"} /> */}
        {/* 
        <Chart itemID={item} /> */}
        <NewChart itemID={item} />
      </div>
    );
  }
}

export default App;
