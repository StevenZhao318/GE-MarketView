import React, { useState, useEffect } from 'react';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { fetchRawData } from '../../api';
import { Box } from '@chakra-ui/react';

import { itemNames, nameToID } from '../../data/ItemList';

// require('highcharts/indicators/indicators')(Highcharts);
// require('highcharts/indicators/trendline')(Highcharts);

const color = '#3375cc';

const options = {
  title: {
    text: 'Item',
    y: 35,
    style: {
      fontSize: '26px',
      fontWeight: 'bold',
      color: '#FFFFFFEB',
      textTransform: 'capitalize',
    },
  },
  series: [
    {
      data: [],
      type: 'spline',
      name: 'Price',
      id: 'clay',
      color: color,
    },
  ],
  credits: {
    enabled: false,
  },
  labels: {
    style: {
      color: 'red',
    },
  },
  rangeSelector: {
    buttonTheme: {
      fill: '#505053',
      stroke: '#000000',
      style: {
        color: '#CCC',
      },
      states: {
        hover: {
          fill: '#707073',
          stroke: '#000000',
          style: {
            color: 'white',
          },
        },
        select: {
          fill: '#335CAD',
          stroke: '#000000',
          style: {
            color: 'white',
          },
        },
      },
    },
  },
  tooltip: {
    pointFormat:
      '<span style="color:' +
      '{series.color}' +
      '">' +
      '●' +
      '</span> {series.name}: <b>{point.y:,.0f}</b><br/>',

    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    style: {
      color: '#F0F0F0',
    },
  },

  yAxis:
    // { opposite: false },
    [
      {
        labels: {
          align: 'left',
          style: { color: '#FFFFFFCC' },
        },
        title: {
          text: 'Price',
          style: { color: '#FFFFFFCC' },
        },
        height: '60%',
        gridLineColor: '#707073',
      },
      {
        labels: {
          align: 'left',
          style: { color: '#FFFFFFCC' },
        },
        title: {
          text: 'Volume',
          style: { color: '#FFFFFFCC' },
        },
        gridLineColor: '#707073',
        top: '65%',
        height: '35%',
        offset: 0,
      },
    ],
  chart: { height: '50%', backgroundColor: '#262A2E' },
  navigator: {
    handles: {
      backgroundColor: '#666',
      borderColor: '#AAA',
    },
  },
  scrollbar: {
    barBackgroundColor: '#808083',
    barBorderColor: '#808083',
    buttonArrowColor: '#CCC',
    buttonBackgroundColor: '#606063',
    buttonBorderColor: '#606063',
    rifleColor: '#FFF',
    trackBackgroundColor: '#404043',
    trackBorderColor: '#404043',
  },
};

const Chart = ({ itemID }) => {
  const [data, setData] = useState([]);
  const [chartOptions, setChartOptions] = useState(options);

  useEffect(() => {
    const fetchAPI = async () => {
      const ID = nameToID[itemID];
      // console.log('itemID is: ' + ID + ' for item ->' + itemID);
      const rawData = await fetchRawData(ID);

      if (rawData) {
        const data = rawData[ID].map((obj) => [obj.timestamp, obj.price]);
        const volume = rawData[ID].map((obj) => [obj.timestamp, obj.volume]);

        setChartOptions({
          ...chartOptions,
          title: {
            text: itemID,
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
      }
    };
    fetchAPI();
  }, [itemID]);

  return (
    <Box h='100%' w='100%'>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        constructorType={'stockChart'}
      />
    </Box>
  );
};

export default Chart;
