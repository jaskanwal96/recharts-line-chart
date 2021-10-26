import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { policies } from "./policies";
/*
<Chart>
XAxisProjections: Levelled Stepped
YAxisProjections: premium

 {
   age: 
   Levelled:
   Stepped: 
 }
*/
const projectionLines = [
  {
    label: "stepped",
    stroke: "#8884d8"
  },
  {
    label: "level",
    stroke: "#123111"
  }
];

// const newProjectionLines = [
//   {
//     label: 'policy0Stepped',
//     stroke: '#8884d8'
//   },
//   {
//     label: 'policy1Stepped',
//     stroke: '#123111'
//   },
//   {
//     label: 'policy2Stepped',
//     stroke: '#123401'
//   },
//   {
//     label: 'policy0Level',
//     stroke: '#8884d8'
//   },
//   {
//     label: 'policy1Level',
//     stroke: '#123111'
//   },
//   {
//     label: 'policy2Level',
//     stroke: '#123401'
//   },
// ]
console.log(policies);
console.log(Object.keys(policies[0]));

const newProjectionLines = Object.keys(policies[0]).map((policy) => ({
  label: policy,
  stroke: "#8884d8"
}));

console.log(newProjectionLines);

export default function App() {
  return (
    <LineChart
      width={500}
      height={300}
      data={policies}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="age" />
      <YAxis />
      <Tooltip />
      <Legend />
      {newProjectionLines.map((el, i) => (
        <Line
          type="monotone"
          dataKey={el.label}
          stroke={el.stroke}
          activeDot={{ r: 8 }}
        />
      ))}
    </LineChart>
  );
}
