import React from 'react'
import ReactEcharts from "echarts-for-react";

export default function Index() {
const getOption = () => ({
  title: {
    text: "近三年薪資漲幅",
    x: "center",

  },
  legend: { y:"30px" },
  tooltip: {},
  dataset: {
    source: [
      ['product', '2019', '2020', '2021'],
      ['製造業', 43.3, 85.8, 93.7],
      ['批發業', 83.1, 73.4, 55.1],

    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  
});
return (

  <ReactEcharts
    option={getOption()}
    style={{ height: "400px", width: "100%" }}
  />
);
}
