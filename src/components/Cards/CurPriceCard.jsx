import React, { useState, useEffect } from "react";
import { CardContent, Typography } from "@material-ui/core";
// import Moment from "react-moment";

import { fetchCurData } from "../../api";

const CurPriceCard = (item) => {
  // return <div>hello world</div>;

  // if (!item) {
  //   return "Loading ...";
  // }

  const [curPriceData, setCurPriceData] = useState([]);

  useEffect(() => {
    console.log("Fetching current Price for ... " + item.itemID);
    const fetchAPI = async () => {
      const { data: curPriceData } = await fetchCurData(item.itemID);
      setCurPriceData(curPriceData);
    };
    fetchAPI();
  }, [item.itemID]);

  const lowTime = new Date(curPriceData[item.itemID]?.lowTime * 1000);
  const highTime = new Date(curPriceData[item.itemID]?.highTime * 1000);

  const lowTimeString = lowTime.toLocaleTimeString("en-US");
  const highTimeString = highTime.toLocaleTimeString("en-US");

  return (
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Current Price
      </Typography>
      <Typography variant="body2">
        High Price: {curPriceData[item.itemID]?.high} [{highTimeString}]
      </Typography>
      <Typography variant="body2">
        Low Price: {curPriceData[item.itemID]?.low} [{lowTimeString}]
      </Typography>
    </CardContent>
  );
};

export default CurPriceCard;
