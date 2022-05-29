import React from 'react'
import ReactEcharts from "echarts-for-react";

export default function Index(props) {

const categoryA = props.categoryA
const categoryB = props.categoryB

const getOption = () => ({
  title: {
    text: "近三年平均薪資",
    x: "center",

  },
  legend: { y:"30px" },
  tooltip: {},
  dataset: {
    source: [
      ['product', '108年', '109年', '110年'],
      [categoryA, 41467,39443, 39957],
      [categoryB, 38938, 39026,40122],

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
