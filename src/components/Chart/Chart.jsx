import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fetchRawData } from "../../api";

import styles from "./Chart.module.css";

const Chart = (item) => {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const rawData = await fetchRawData(item.itemID);
      setRawData(rawData);
    };
    fetchAPI();
  }, [item.itemID]);

  const lineChart = (
    <Line
      data={{
        labels: rawData.map((d) => {
          const date = new Date(d.timestamp * 1000);
          const month = date.toLocaleString("default", { month: "short" });
          const day = date.getDate();
          const time = date.toLocaleTimeString("en-US");
          return time + ",  " + month + " " + day;
        }),
        datasets: [
          {
            data: rawData.map((d) => d.avgHighPrice),
            label: "High",
            borderColor: "#3333ff",
            fill: false,
            spanGaps: true,
            pointRadius: 2,
            borderWidth: 2,
          },
          {
            data: rawData.map((d) => d.avgLowPrice),
            label: "Low",
            borderColor: "red",
            fill: false,
            spanGaps: true,
            pointRadius: 2,
            borderWidth: 2,
          },
        ],
      }}
    ></Line>
  );

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
