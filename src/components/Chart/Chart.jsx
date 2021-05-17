import React, { useState, useEffect } from 'react';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { fetchRawData } from '../../api';

import { Box } from '@chakra-ui/react';

import styles from './Chart.module.css';

const color = '#3375cc';

const options = {
  title: {
    text: 'My chart',
  },
  series: [
    {
      data: [],
      type: 'spline',
      name: 'AAPL Stock Price',
      id: 'clay',
      color: color,
    },
  ],
  credits: {
    enabled: false,
  },
  tooltip: {
    pointFormat:
      '<span style="color:' +
      color +
      '">' +
      '●' +
      '</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  },
  yAxis:
    // { opposite: false },
    [
      {
        labels: {
          align: 'left',
        },
        title: {
          text: 'Price',
        },
        height: '60%',
      },
      {
        labels: {
          align: 'left',
        },
        title: {
          text: 'Volume',
        },
        top: '65%',
        height: '35%',
        offset: 0,
      },
    ],
  chart: { height: '50%' },
};

const Chart = ({ itemID }) => {
  console.log(itemID);
  const [data, setData] = useState([]);
  const [chartOptions, setChartOptions] = useState(options);

  useEffect(() => {
    const fetchAPI = async () => {
      const rawData = await fetchRawData(itemID);

      const data = rawData[itemID].map((obj) => [obj.timestamp, obj.price]);
      const volume = rawData[itemID].map((obj) => [obj.timestamp, obj.volume]);
      console.log(volume);

      setChartOptions({
        ...chartOptions,
        title: { text: itemID },
        series: [
          {
            data: data,
            type: 'spline',
            name: itemID,
            id: itemID,
            color: color,
          },
          {
            type: 'area',
            name: 'Volume',
            lineWidth: 1,
            crisp: false,
            data: volume,
            yAxis: 1,
          },
        ],
      });
    };
    fetchAPI();
  }, [itemID]);

  return (
    <Box className={styles.container}>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        constructorType={'stockChart'}
      />
    </Box>
  );
};

export default Chart;
