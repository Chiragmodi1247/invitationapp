import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import Title from "./Title";

const data = [
  { month: "Jan", ev: 65 },
  { month: "Feb", ev: 100 },
  { month: "Mar", ev: 45 },
  { month: "Apr", ev: 27 },
  { month: "May", ev: 32 },
  { month: "Jun", ev: 20 },
  { month: "Jul", ev: 29 },
  { month: "Aug", ev: 37 },
  { month: "Sep", ev: 53 },
  { month: "Oct", ev: 38 },
  { month: "Nov", ev: 49 },
  { month: "Dec", ev: 63 }
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Activity Graph</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 16,
            bottom: 0,
            left: 0
          }}
        >
          <XAxis dataKey="month">
            <Label
              angle={0}
              offset={0}
              position="insideBottom"
              style={{ textAnchor: "middle" }}
            >
              Month
            </Label>
          </XAxis>
          <YAxis>
            <Label
              angle={270}
              position="insideLeft"
              style={{ textAnchor: "middle" }}
            >
              Events
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="ev" stroke="#556CD6" dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
