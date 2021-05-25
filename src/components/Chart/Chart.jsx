import React, { useState, useEffect } from 'react';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { fetchRawData } from '../../api';
import { Box } from '@chakra-ui/react';
import styles from './Chart.module.css';

import { itemNames, nameToID } from '../../data/ItemList';

require('highcharts/indicators/indicators')(Highcharts);
require('highcharts/indicators/trendline')(Highcharts);

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
      '{series.color}' +
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
  const [data, setData] = useState([]);
  const [chartOptions, setChartOptions] = useState(options);

  useEffect(() => {
    const fetchAPI = async () => {
      const ID = nameToID[itemID];
      // console.log('itemID is: ' + ID + ' for item ->' + itemID);
      const rawData = await fetchRawData(ID);

      const data = rawData[ID].map((obj) => [obj.timestamp, obj.price]);
      const volume = rawData[ID].map((obj) => [obj.timestamp, obj.volume]);

      setChartOptions({
        ...chartOptions,
        title: {
          text: itemID,
          style: { fontSize: '22px', fontWeight: 'bold' },
        },
        series: [
          {
            data: data,
            type: 'spline',
            name: itemID,
            id: itemID,
            // showCheckbox: true,
            // selected: true,
            color: color,
          },
          {
            type: 'area',
            name: 'Volume',
            lineWidth: 1,
            crisp: false,
            data: volume,
            color: '#75CC33',
            yAxis: 1,
          },
          // {
          //   type: 'sma',
          //   color: '#CC3375',
          //   name: '30-Day Average',
          //   linkedTo: itemID,
          //   dashStyle: 'ShortDash',
          //   params: {
          //     period: 30,
          //   },
          //   yAxis: 0,
          //   zAxis: 2,
          // },
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
