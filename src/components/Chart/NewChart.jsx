import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.stock.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

const NewChart = (item) => {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const rawData = await fetchRawData(item.itemID);
      setRawData(rawData);
    };
    fetchAPI();
  }, [item.itemID]);

  const lineChart = (

  );

  return <div className={styles.container}>{lineChart}</div>;
};

export default NewChart;
