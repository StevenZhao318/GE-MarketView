import React, { useState, useEffect } from "react";

import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { fetchRawData } from "../../api";

const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [
        [1483401600000, 115.8],
        [1483488000000, 115.85],
        [1483574400000, 115.92],
        [1483660800000, 116.78],
        [1483920000000, 117.95],
        [1484006400000, 118.77],
        [1484092800000, 118.74],
        [1484179200000, 118.9],
        [1484265600000, 119.11],
      ],
      type: "spline",
      name: "AAPL Stock Price",
      id: "appl",
    },
  ],
};

const NewChart = ({ itemID }) => {
  console.log(itemID);
  const [data, setData] = useState([]);
  const [chartOptions, setChartOptions] = useState(options);

  useEffect(() => {
    const fetchAPI = async () => {
      const rawData = await fetchRawData(itemID);

      const data = rawData[itemID].map((obj) => [obj.timestamp, obj.price]);

      setChartOptions({
        ...chartOptions,
        title: { text: "Chart" },
        series: [{ data: data, type: "spline", name: itemID, id: itemID }],
      });

      // setData(data);
    };
    fetchAPI();
  }, [itemID]);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        constructorType={"stockChart"}
        // constructorType={"stockChart"}
      />
    </div>
  );
};

export default NewChart;
