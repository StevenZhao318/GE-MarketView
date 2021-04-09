import React from "react";
import { dataSource } from "./data.js";

import Chart, {
  Series,
  Aggregation,
  ArgumentAxis,
  Grid,
  Label,
  ValueAxis,
  Margin,
  Legend,
  Tooltip,
} from "devextreme-react/chart";

import RangeSelector, {
  Size,
  Scale,
  Chart as RsChart,
  ValueAxis as RsValueAxis,
  Series as RsSeries,
  Aggregation as RsAggregation,
  Behavior,
} from "devextreme-react/range-selector";

class NewChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visualRange: {},
    };

    this.updateVisualRange = this.updateVisualRange.bind(this);
  }

  render() {

    /**
     * https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#customizeTooltip
     */
    const toolTip = (pointInfo) => {
      const time = pointInfo.argument.toLocaleTimeString("en-US");
      const date = pointInfo.argument.toLocaleDateString("en-US");
      return {
        text: time + ", " + date + " \n " + "High Price: " + pointInfo.value,
      };
    };

    return (
      <div id="price-chart">
        <Chart
          id="zoomedChart"
          dataSource={dataSource}
          // title=""
        >
          <Series type="line" valueField="Open" argumentField="Date">
            <Aggregation enabled={false} />
          </Series>
          <ArgumentAxis
            visualRange={this.state.visualRange}
            valueMarginsEnabled={false}
            argumentType="datetime"
          >
            <Grid visible={true} />
            <Label visible={true} />
          </ArgumentAxis>
          <ValueAxis valueType="numeric" />
          <Margin right={10} />
          <Legend visible={false} />
          <Tooltip enabled={true} customizeTooltip={toolTip} />
        </Chart>
        <RangeSelector
          dataSource={dataSource}
          onValueChanged={this.updateVisualRange}
        >
          <Size height={120} />
          <RsChart>
            <RsValueAxis valueType="numeric" />
            <RsSeries type="line" valueField="Open" argumentField="Date">
              <RsAggregation enabled="false" />
            </RsSeries>
          </RsChart>
          <Scale
            placeholderHeight={20}
            minorTickInterval="day"
            tickInterval="month"
            valueType="datetime"
            aggregationInterval="week"
          />
          <Behavior snapToTicks={false} callValueChanged="onMoving" />
        </RangeSelector>
      </div>
    );
  }

  updateVisualRange(e) {
    this.setState({ visualRange: e.value });
  }
}

export default NewChart;
