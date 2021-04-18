import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fetchRawData } from "../../api";

import styles from "./Chart.module.css";

const Chart = ({ itemID }) => {
  console.log(itemID);
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchRawData(itemID);
      setRawData(data[itemID]);
    };
    fetchAPI();
  }, [itemID]);

  const lineChart = rawData && (
    <Line
      data={{
        labels: rawData.map((d) => {
          const date = new Date(d.timestamp);
          const month = date.toLocaleString("default", { month: "short" });
          const day = date.getDate();
          const year = date.getFullYear();
          // const time = date.toLocaleTimeString("en-US");
          return month + " " + day + ", " + year;
        }),
        datasets: [
          {
            data: rawData.map((d) => d.price),
            label: "High",
            borderColor: "#3333ff",
            fill: false,
            spanGaps: true,
            pointRadius: 2,
            borderWidth: 2,
          },
          // {
          //   data: rawData.map((d) => d.avgLowPrice),
          //   label: "Low",
          //   borderColor: "red",
          //   fill: false,
          //   spanGaps: true,
          //   pointRadius: 2,
          //   borderWidth: 2,
          // },
        ],
      }}
    ></Line>
  );

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
